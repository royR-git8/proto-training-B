import { type SearchBarProps } from './Employees.tsx'

export function SearchBar({ filterEmps, setFilterEmps }: SearchBarProps) {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                type="text"
                placeholder="Search..."
                value={filterEmps}
                onChange={(e) => setFilterEmps(e.target.value)}
            />
            <label>{' '}search for employee</label>
        </form>
    );
}