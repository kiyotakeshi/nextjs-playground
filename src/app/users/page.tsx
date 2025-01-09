'use client';

import { useState, useEffect } from 'react';
import { User } from '../types';

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [isExpanded, setIsExpanded] = useState(false);
    const initialDisplayCount = 5;

    useEffect(() => {
        fetch('/api/users')
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            });
    }, []);

    const displayUsers = isExpanded ? users : users.slice(0, initialDisplayCount);

    const toggleExpanded = () => setIsExpanded(!isExpanded);

    return (
        <div style={{ padding: '20px' }}>
            <h1>ユーザ一覧</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {displayUsers.map((user) => (
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
                {users.length > initialDisplayCount && (
                    <li style={{ textAlign: 'center', marginTop: '10px' }}>
                        <button onClick={toggleExpanded}>
                            {isExpanded
                                ? `表示を少なくする(${initialDisplayCount}件)`
                                : 'もっと表示する'}
                        </button>
                    </li>
                )}
            </ul>
        </div>
    );
}
