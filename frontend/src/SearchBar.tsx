import type { SearchBarProps } from "./Employees";

export function SearchBar({ filterEmployees, setFilterEmployees }: SearchBarProps) {
    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <input
                type="text"
                placeholder="Search..."
                value={filterEmployees}
                onChange={(event) => setFilterEmployees(event.target.value)}
            />
            <label>{' '}search for employee</label>
        </form>
    );
}