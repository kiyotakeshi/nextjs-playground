'use client';

import { useState, useEffect } from 'react';
import { User } from '../types';

export default function UsersPage() {
    const visibleUserCount = 5;
    const [users, setUsers] = useState<User[]>([]);
    const [visibleCount, setVisibleCount] = useState(visibleUserCount);

    useEffect(() => {
        fetch('/api/users')
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            });
    }, []);

    const handleShowMore = () => {
        setVisibleCount(users.length); // すべてのユーザを表示
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>ユーザ一覧</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {users.slice(0, visibleCount).map((user) => (
                    <li
                        key={user.id}
                        style={{
                            border: '1px solid #ccc',
                            padding: '10px',
                            marginBottom: '10px',
                            borderRadius: '5px',
                        }}
                    >
                        <strong>ID:</strong> {user.id} <br />
                        <strong>名前:</strong> {user.name} <br />
                        <strong>年齢:</strong> {user.age} <br />
                        <strong>出身地:</strong> {user.location}
                    </li>
                ))}
            </ul>
            {/* ボタンをリストの外に表示 */}
            {visibleCount < users.length && (
                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                    <button onClick={handleShowMore}>もっと表示する</button>
                </div>
            )}
        </div>
    );
}
