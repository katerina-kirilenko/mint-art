interface dataType {
  selected: number;
}

export interface PaginationType {
  pageCount: number;
  marginPagesDisplayed: number;
  pageRangeDisplayed: number;
  initialPage: number;
  onPageChange: (data: dataType) => void;
}
