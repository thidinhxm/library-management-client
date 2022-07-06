import classes from './DataTable.module.scss'; 

export const bookColumns = [
  { field: "id", headerName: "bookTitle ID", width: 100 },
  {
    field: "bookName",
    headerName: "Book Name",
    width: 300,
    renderCell: (params) => {
      return (
        <div className={classes.cellWithImg}>
          <img className={classes.cellImg} src={params.row.imageURL} alt="avatar" />
          {params.row.bookName}
        </div>
      );
    },
  },
  {
    field: "author",
    headerName: "Author",
    width: 250,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 100,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "category",
    headerName: "Category",
    width: 150,
  },
];

export const readerColumns = [
  { field: "id", headerName: "Reader ID", width: 100 },
  {
    field: "username",
    headerName: "Username",
    width: 200,
  },
  {
    field: "name",
    headerName: "Name",
    width: 230,
  },
  {
    field: "address",
    headerName: "Address",
    width: 230,
  },
  {
    field: "DOB",
    headerName: "Date of Birth",
    width: 150,
  }
];

export const librarianColumns = [
  { field: "id", headerName: "Librarian ID", width: 100 },
  {
    field: "username",
    headerName: "Username",
    width: 200,
  },
  {
    field: "name",
    headerName: "Name",
    width: 230,
  },
  {
    field: "address",
    headerName: "Address",
    width: 230,
  },
  {
    field: "role",
    headerName: "Role",
    width: 170,
  }
];

export const borrowCardColumns = [
  { field: "id", headerName: "BorrowCard ID", width: 120 },
  {
    field: "createDate",
    headerName: "Create Date",
    width: 150,
  },
  {
    field: "expiredDate",
    headerName: "Expired Date",
    width: 150,
  },
  {
    field: "librarian",
    headerName: "Librarian",
    width: 200,
  },
  {
    field: "reader",
    headerName: "Reader",
    width: 200,
  },
];

export const returnCardColumns = [
  { field: "id", headerName: "ReturnCard ID", width: 120 },
  {
    field: "createDate",
    headerName: "Create Date",
    width: 150,
  },
  {
    field: "borrowCardID",
    headerName: "Borrow Card ID",
    width: 150,
  },
  {
    field: "librarian",
    headerName: "Librarian",
    width: 200,
  },
];

