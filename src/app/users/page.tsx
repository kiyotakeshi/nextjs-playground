'use client';

import { useState, useEffect } from 'react';
import { User } from '../types';

export default function UsersPage() {
    const defaultDisplayCount = 5;
    const [users, setUsers] = useState<User[]>([]);
    const [visibleCount, setVisibleCount] = useState(defaultDisplayCount);

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

    const handleShowLess = () => {
        setVisibleCount(defaultDisplayCount); // 初期件数に戻す
    };

    const shouldShowMoreButton =
        users.length > defaultDisplayCount && visibleCount < users.length;
    const shouldShowLessButton =
        users.length > defaultDisplayCount && visibleCount >= users.length;

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
            {shouldShowMoreButton && (
                <li style={{ textAlign: 'center', marginTop: '10px' }}>
                    <button onClick={handleShowMore}>もっと表示する</button>
                </li>
            )}
            {shouldShowLessButton && (
                <li style={{ textAlign: 'center', marginTop: '10px' }}>
                    <button onClick={handleShowLess}>
                        表示を少なくする({defaultDisplayCount}件)
                    </button>
                </li>
            )}
        </div>
    );
}
