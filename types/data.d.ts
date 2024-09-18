export type TData = {
  id: string;
  employee: {
    name: string;
    designation: string;
    image: string;
  };
  device: {
    name: string;
    image: string;
    description: string;
  };
  requestedOn: Date;
  amountPayable: {
    value: string; // Rs. 13,416 / month
    description: string; // For 6 months
  };
};
