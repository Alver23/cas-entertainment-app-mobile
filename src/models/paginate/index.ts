export interface IPaginate<T> {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  items: T[];
}
