import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, switchAll } from 'rxjs';
import { User } from './user.model';
import { Group } from './group.model';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDataSource {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getUsers(): Observable<User[]> {
    return this.http.get<any[]>(this.baseUrl + 'user');
  }

  // getUser(id: string): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}user/${id}`);
  // }
  // getUser(id: string): Observable<User> {
  //   return this.http.get<any>(`${this.baseUrl}user?user_id=${id}`);
  // }
  getUser(id: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}user?user_id=${id}`);
  }

  addUser(user: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'user', user);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}user/${user.user_id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}user/${id}`);
  }

  getGroups(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'groups');
  }

  getGroupById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}groups/${id}`);
  }

  addGroup(group: Group): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'groups', group);
  }

  updateGroup(group: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}groups/${group.group_id}`, group);
  }

  deleteGroup(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}groups/${id}`);
  }

  getExpenses(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'expenses');
  }

  getExpense(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}expenses/${id}`);
  }

  getExpensesByGroup(groupId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}expenses?group_id=${groupId}`);
  }

  addExpense(expense: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'expenses', expense);
  }

  updateExpense(expense: any): Observable<any> {
    return this.http.put<any>(
      `${this.baseUrl}expenses/${expense.expense_id}`,
      expense
    );
  }

  deleteExpense(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}expenses/${id}`);
  }

  getGroupsByUserId(userId: string): Observable<string[]> {
    // return this.http
    //   .get<any>(`${this.baseUrl}user/${userId}`)
    //   .pipe(map((user) => user.userGroups ?? []));
    return this.http.get<any[]>(`${this.baseUrl}user`).pipe(
      map((users) => {
        const user = users.find((u) => u.user_id === userId);
        return user?.userGroups ?? [];
      })
    );
  }
  // updateUserByQuery(user: User): Observable<any> {
  //   return this.http
  //     .get<User[]>(`${this.baseUrl}user?user_id=${user.user_id}`)
  //     .pipe(
  //       map((users) => {
  //         if (!users || users.length === 0) {
  //           throw new Error('User not found');
  //         }
  //         const existingUser = users[0];
  //         const internalId = existingUser.user_id || existingUser.user_id; // Adjust based on your backend
  //         return this.http.put(`${this.baseUrl}user/${internalId}`, user);
  //       }),
  //       switchAll() // Flattens the nested Observable
  //     );
  // }
  // updateUserByUserId(user: User): Observable<any> {
  //   return this.http
  //     .get<User[]>(`${this.baseUrl}user?user_id=${user.user_id}`)
  //     .pipe(
  //       map((users) => {
  //         if (!users || users.length === 0) {
  //           throw new Error('User not found');
  //         }

  //         const existingUser = users[0];
  //         const internalId = existingUser.id || existingUser.user_id;

  //         return this.http.put(`${this.baseUrl}user/${internalId}`, user);
  //       }),
  //       switchAll()
  //     );
  // }
  updateUserByUserId(user: User): Observable<any> {
    return this.http
      .get<User[]>(`${this.baseUrl}user?user_id=${user.user_id}`)
      .pipe(
        map((users) => {
          if (!users || users.length === 0) {
            throw new Error('User not found');
          }

          const existingUser = users[0];
          const internalId = existingUser.id;

          if (!internalId) {
            throw new Error('User is missing internal id');
          }

          return this.http.put(`${this.baseUrl}user/${internalId}`, user);
        }),
        switchAll()
      );
  }
}
