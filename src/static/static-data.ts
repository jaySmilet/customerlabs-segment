import type { SchemaOption } from "../types/schema";

export const webhookUrl =
  "https://webhook.site/e84fdc55-e70d-4e38-ac31-24dbe92aa6ec";

export const initialSchemaOption: SchemaOption = { value: "", label: "" };

export const schemaOptions: SchemaOption[] = [
  { value: "first_name", label: "First Name" },
  { value: "last_name", label: "Last Name" },
  { value: "gender", label: "Gender" },
  { value: "account_name", label: "Account Name" },
  { value: "city", label: "City" },
  { value: "state", label: "State" },
];
