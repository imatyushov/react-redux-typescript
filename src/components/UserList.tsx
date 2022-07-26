import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/useActions";

const UserList: React.FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.users)
    const {fetchUsers} = useActions()

    useEffect(() => {
       fetchUsers()
    }, [])

    if (loading) {
        return <h1>Идет загрузка пользователей...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div style={{fontSize: 30, border: '1px solid black'}}>
            {users.map(user =>
                <div key={user.id}>{user.id}. {user.name}</div>
            )}
        </div>
    );
};

export default UserList;