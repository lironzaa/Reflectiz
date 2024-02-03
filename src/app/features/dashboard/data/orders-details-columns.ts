import { DataTableColumnTypes } from "../../../shared/enums/data-table-column-types";

export const OrdersDetailsColumns = [
  { title: "fullName" },
  { title: "gender" },
  { title: "email" },
  { title: "birthDate", columnType: DataTableColumnTypes.Date },
  { title: "address" },
  { title: "city" },
  { title: "country" },
  { title: "hobbies", columnType: DataTableColumnTypes.Array },
  { title: "favoriteColor", columnType: DataTableColumnTypes.Color },
  { title: "seatsAmount" },
  { title: "motorType" },
];

export const ColumnsNamesArr = [ 'fullName', 'gender', 'email', 'birthDate', 'address', 'city', 'country', 'hobbies', 'favoriteColor', 'seatsAmount', 'motorType' ];
