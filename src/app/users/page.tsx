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

    const defaultDisplayCount = 5; // 初期表示件数
    const [displayCount, setDisplayCount] = useState(defaultDisplayCount);

    const isExpanded = displayCount > defaultDisplayCount; // 全件表示中か判定
    console.log('isExpanded:', isExpanded);

    const toggleExpanded = () => {
        console.log('toggleExpanded isExpanded:', isExpanded);
        // isExpanded が true の状態で押されたら初期表示件数に戻す
        setDisplayCount(isExpanded ? defaultDisplayCount : users.length);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>ユーザ一覧</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {users.slice(0, displayCount).map((user) => (
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
                {users.length > defaultDisplayCount && (
                    <li style={{ textAlign: 'center', marginTop: '10px' }}>
                        <button onClick={toggleExpanded}>
                            {isExpanded
                                ? `表示を少なくする(${defaultDisplayCount}件)`
                                : 'もっと表示する'}
                        </button>
                    </li>
                )}
            </ul>
        </div>
    );
}
