import React from "react";
import './Employees.css';

function Employees() {
    return (
        <body>

            <table className="employees-table">
                <tr>
                    <td>
                        <ul>
                            <li>name of employee: andrew 13</li>
                            <li>country: japan</li>
                            <li>age of employee: 67</li>
                            <li>
                                photo:
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4c5yoJNnEHRNy0nYiPJai5F6mrw5FOgGDQb8OOjfpqQ&s=10"
                                    alt="Andrew"
                                />
                            </li>
                        </ul>
                    </td>

                    <td>
                        <ul>
                            <li>name of employee: cheineese travis scott</li>
                            <li>country: chaina</li>
                            <li>age of employee: 333</li>
                            <li>
                                photo:
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdEGOgxD4AOOgnUuQvaNJDuKOUZtDF86UOyte9Tn3hlw&s=10"
                                    alt="twavisss"
                                />
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>name of employee: big chin jonny</li>
                            <li>country: morroco</li>
                            <li>age of employee: 999999</li>
                            <li>
                                photo:
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHac5Khx8l1UOO9y82UDu-El0awG_ekzPs9jMSqyFX4w&s=10" alt="son"
                                />
                            </li>
                        </ul>
                    </td>

                    <td>
                        <ul>
                            <li>miguelito</li>
                            <li>country: spain</li>
                            <li>age of employee: 0</li>
                            <li>
                                photo:
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4kqQgvY1ZYUsgOMwXOqF6Wckx_Ad3KULXg3rEURUZRQ&s=10"
                                    alt="black cat"
                                />
                            </li>
                        </ul>
                    </td>
                </tr>
            </table>
        </body>

    );
}

export default Employees;