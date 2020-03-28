import React from "react";
import {Table} from "reactstrap";
import {InertiaLink} from "@inertiajs/inertia-react";

function UsersList(props){
    return (
        <Table responsive>
            <thead className="text-primary">
            <tr>
                {props.fields.languages && <th>#</th>}
                {props.fields.id && <th>ID</th>}
                {props.fields.date && <th>Register date</th>}
                {props.fields.email && <th>Email</th>}
                {props.fields.value && <th className="text-center">Name</th>}
                {props.fields.status && <th>Country</th>}
                <th></th>
            </tr>
            </thead>
            <tbody>
                {(props.data && props.data.length > 0) ? props.data.map((user, index) =>
                    <tr key={user.id}>
                        {props.fields.languages && <td>{index + 1}</td>}
                        {props.fields.id && <td>{user.id}</td>}
                        {props.fields.date && <td>{user.created_at}</td>}
                        {props.fields.email && <td>{user.email}</td>}
                        {props.fields.name && <td>{index + 1}</td>}
                        {props.fields.country && <td>{user.country.name}</td>}
                        <td className="text-right">
                            <InertiaLink className={`btn btn-${props.bgColor}`} href={`/admin/users/${user.id}`}>Details</InertiaLink>
                        </td>
                    </tr>
                ) : null}
            </tbody>
        </Table>
    );
}

export default UsersList;
