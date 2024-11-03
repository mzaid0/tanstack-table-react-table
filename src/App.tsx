import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
  getPaginationRowModel,
  getSortedRowModel,
  ColumnSort,
  getFilteredRowModel,
  PaginationState,
} from "@tanstack/react-table";
import { useState } from "react";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";

// Define the Student type with more attributes
type Student = {
  id: number;
  name: string;
  age: number;
  grade: string;
  major: string;
  enrollmentDate: string;
  email: string;
  phone: string;
  address: string;
  GPA: number;
  graduationDate: string;
};

// Define data with type
const data: Student[] = [
  {
    id: 1,
    name: "Alice",
    age: 20,
    grade: "A",
    major: "Computer Science",
    enrollmentDate: "2022-09-01",
    email: "alice@example.com",
    phone: "123-456-7890",
    address: "123 Main St",
    GPA: 3.9,
    graduationDate: "2026-05-15",
  },
  {
    id: 2,
    name: "Bob",
    age: 22,
    grade: "B",
    major: "Mathematics",
    enrollmentDate: "2021-09-01",
    email: "bob@example.com",
    phone: "234-567-8901",
    address: "456 Elm St",
    GPA: 3.5,
    graduationDate: "2025-05-15",
  },
  {
    id: 3,
    name: "Charlie",
    age: 21,
    grade: "A",
    major: "Physics",
    enrollmentDate: "2023-01-15",
    email: "charlie@example.com",
    phone: "345-678-9012",
    address: "789 Oak St",
    GPA: 3.8,
    graduationDate: "2026-05-15",
  },
  {
    id: 4,
    name: "David",
    age: 23,
    grade: "C",
    major: "Biology",
    enrollmentDate: "2020-09-01",
    email: "david@example.com",
    phone: "456-789-0123",
    address: "101 Pine St",
    GPA: 2.9,
    graduationDate: "2024-05-15",
  },
  {
    id: 5,
    name: "Eve",
    age: 20,
    grade: "B",
    major: "Chemistry",
    enrollmentDate: "2022-09-01",
    email: "eve@example.com",
    phone: "567-890-1234",
    address: "202 Maple St",
    GPA: 3.6,
    graduationDate: "2026-05-15",
  },
  {
    id: 6,
    name: "Frank",
    age: 24,
    grade: "A",
    major: "Engineering",
    enrollmentDate: "2019-09-01",
    email: "frank@example.com",
    phone: "678-901-2345",
    address: "303 Birch St",
    GPA: 3.7,
    graduationDate: "2024-05-15",
  },
  {
    id: 7,
    name: "Grace",
    age: 22,
    grade: "B",
    major: "Economics",
    enrollmentDate: "2021-09-01",
    email: "grace@example.com",
    phone: "789-012-3456",
    address: "404 Cedar St",
    GPA: 3.4,
    graduationDate: "2025-05-15",
  },
  {
    id: 8,
    name: "Hannah",
    age: 21,
    grade: "A",
    major: "Philosophy",
    enrollmentDate: "2023-01-15",
    email: "hannah@example.com",
    phone: "890-123-4567",
    address: "505 Spruce St",
    GPA: 3.9,
    graduationDate: "2026-05-15",
  },
  {
    id: 9,
    name: "Ian",
    age: 23,
    grade: "C",
    major: "History",
    enrollmentDate: "2020-09-01",
    email: "ian@example.com",
    phone: "901-234-5678",
    address: "606 Fir St",
    GPA: 2.8,
    graduationDate: "2024-05-15",
  },
  {
    id: 10,
    name: "Judy",
    age: 20,
    grade: "B",
    major: "Art",
    enrollmentDate: "2022-09-01",
    email: "judy@example.com",
    phone: "012-345-6789",
    address: "707 Willow St",
    GPA: 3.3,
    graduationDate: "2026-05-15",
  },
  {
    id: 11,
    name: "Alex",
    age: 19,
    grade: "B+",
    major: "Mechanical Engineering",
    enrollmentDate: "2023-09-01",
    email: "alex@example.com",
    phone: "678-901-2345",
    address: "303 Cedar St",
    GPA: 3.7,
    graduationDate: "2027-05-15",
  },
  {
    id: 12,
    name: "Bella",
    age: 22,
    grade: "A-",
    major: "Business Administration",
    enrollmentDate: "2021-09-01",
    email: "bella@example.com",
    phone: "789-012-3456",
    address: "404 Birch St",
    GPA: 3.8,
    graduationDate: "2025-05-15",
  },
  {
    id: 13,
    name: "Chris",
    age: 21,
    grade: "B",
    major: "Environmental Science",
    enrollmentDate: "2022-01-15",
    email: "chris@example.com",
    phone: "890-123-4567",
    address: "505 Spruce St",
    GPA: 3.5,
    graduationDate: "2026-05-15",
  },
  {
    id: 14,
    name: "Dana",
    age: 23,
    grade: "C+",
    major: "Psychology",
    enrollmentDate: "2020-09-01",
    email: "dana@example.com",
    phone: "901-234-5678",
    address: "606 Maple Ave",
    GPA: 3.0,
    graduationDate: "2024-05-15",
  },
  {
    id: 15,
    name: "Eli",
    age: 20,
    grade: "A",
    major: "Political Science",
    enrollmentDate: "2022-09-01",
    email: "eli@example.com",
    phone: "012-345-6789",
    address: "707 Pine St",
    GPA: 3.9,
    graduationDate: "2026-05-15",
  },
];

// Define columns with ColumnDef type
const columns: ColumnDef<Student>[] = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Age",
    accessorKey: "age",
  },
  {
    header: "Grade",
    accessorKey: "grade",
  },
  {
    header: "Major",
    accessorKey: "major",
  },
  {
    header: "Enrollment Date",
    accessorKey: "enrollmentDate",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Phone",
    accessorKey: "phone",
  },
  {
    header: "Address",
    accessorKey: "address",
  },
  {
    header: "GPA",
    accessorKey: "GPA",
  },
  {
    header: "Graduation Date",
    accessorKey: "graduationDate",
  },
];

const App = () => {
  // Use ColumnSort[] instead of SortingState[]
  const [sorting, setSorting] = useState<ColumnSort[]>([]);
  const [filtering, setFiltering] = useState("");
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 7,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
      pagination, // Link sorting state
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    onPaginationChange: setPagination, // Update sorting state
  });
  return (
    <div className="overflow-x-auto text-sm bg-gray-50 p-6 rounded-lg">
      <div className="flex items-center justify-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
          className="px-4 py-2 w-80 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition duration-300"
        />
      </div>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm table-fixed">
        <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  onClick={header.column.getToggleSortingHandler()}
                  key={header.id}
                  className={`p-3 text-left font-semibold cursor-pointer hover:bg-blue-700 transition duration-300 ${
                    header.id === "phone" ? "w-48" : "w-auto"
                  }`}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {header.column.getIsSorted() === "asc" ? (
                    <FaLongArrowAltUp className="inline ml-2" />
                  ) : header.column.getIsSorted() === "desc" ? (
                    <FaLongArrowAltDown className="inline ml-2" />
                  ) : null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="border-t border-gray-200 hover:bg-gray-100 transition duration-300"
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className={`p-3 ${
                    cell.column.id === "phone" ? "w-48" : "w-auto"
                  }`}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex justify-center space-x-2">
        <button
          onClick={() => table.setPageIndex(0)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
        >
          First
        </button>
        <button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
          className={`px-4 py-2 rounded-lg shadow-md transition duration-200 ${
            table.getCanPreviousPage()
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Prev
        </button>
        <button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
          className={`px-4 py-2 rounded-lg shadow-md transition duration-200 ${
            table.getCanNextPage()
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Next
        </button>
        <button
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default App;
