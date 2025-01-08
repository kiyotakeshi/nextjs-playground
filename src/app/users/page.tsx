'use client';

import { useState, useEffect } from 'react';
import { User } from '../types';

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetch('/api/users')
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            });
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>ユーザ一覧</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>名前</th>
                        <th>年齢</th>
                        <th>出身地</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
