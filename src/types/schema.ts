export type SchemaOption = {
  value: string;
  label: string;
};

export type SchemaItem = {
  id: string;
  value: string;
};

export const makeId = (): string =>
  `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
