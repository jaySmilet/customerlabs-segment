import React from "react";
import {
  initialSchemaOption,
  schemaOptions,
  webhookUrl,
} from "../static/static-data";
import type { SchemaOption } from "../types/schema";

const SaveSegment = () => {
  const [segmentName, setSegmentName] = React.useState<string>("");
  const [schemas, setSchemas] = React.useState<SchemaOption[]>([]);
  const [selectedSchema, setSelectedSchema] =
    React.useState<SchemaOption>(initialSchemaOption);

  const addNewSchema = () => {
    if (selectedSchema.value === "") return;
    setSchemas([...schemas, selectedSchema]);
    setSelectedSchema(initialSchemaOption);
  };

  const handleSchemaChange = (index: number, newValue: string) => {
    const opt = schemaOptions.find((o) => o.value === newValue) ?? {
      value: "",
      label: "",
    };
    setSchemas((prev) => {
      if (index < 0 || index >= prev.length) return prev;
      const next = prev.slice(); // shallow copy
      next[index] = opt; // replacing only the changed row
      return next;
    });
  };

  const sendToServer = async () => {
    if (!segmentName.trim()) {
      alert("Please enter segment name.");
      return;
    }
    if (schemas.length === 0) {
      alert("Please add at least one schema.");
      return;
    }
    const formattedSchemas = schemas.map((schema) => ({
      [schema.value]: schema.label,
    }));
    const payload = {
      segment_name: segmentName,
      schema: formattedSchemas,
    };
    console.log(payload);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Data sent successfully!");
      } else {
        alert("Failed to send data.");
      }
    } catch (error) {
      console.error("Error sending data:", error);
      alert("Error sending data. Check console.");
    }
  };
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex={-1}
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header bg-teal p-4 text-white d-flex gap-4">
        <i
          className="fa fa-angle-left fa-2x cursor-pointer"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></i>
        <h5 className="offcanvas-title" id="offcanvasRightLabel">
          Saving Segment
        </h5>
      </div>
      <div className="offcanvas-body d-flex flex-column gap-4 px-4 py-6 text-start">
        <div className="d-flex flex-column align-items-start gap-2">
          <label htmlFor="segmentName" className="form-label">
            Enter the name of the Segment
          </label>
          <input
            type="text"
            className="form-control"
            id="segmentName"
            placeholder="Name of the Segment"
            value={segmentName}
            onChange={(e) => setSegmentName(e.currentTarget.value)}
          />
        </div>
        <p className="text-left">
          To save your segment, you need to add the schemas to build query
        </p>
        <div className="d-flex justify-content-end align-items-center gap-4">
          <div className="d-flex align-items-baseline gap-1">
            <div className="dot bg-success rounded-circle"></div>
            <span>- User Traits</span>
          </div>
          <div className="d-flex align-items-baseline gap-1">
            <div className="dot bg-danger rounded-circle"></div>
            <span>- Group Traits</span>
          </div>
        </div>
        {schemas.length > 0 && (
          <div className="border border-primary p-2">
            <div className="d-flex flex-column align-items-center gap-4">
              {schemas.map((schema, index) => (
                <div
                  className="w-100 d-flex justify-content-start align-items-center gap-2"
                  key={index}
                >
                  <div
                    className={`${
                      schema.value == "account_name"
                        ? "bg-danger"
                        : "bg-success"
                    } dot rounded-circle`}
                  ></div>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    key={index}
                    value={schema.value}
                    onChange={(e) =>
                      handleSchemaChange(index, e.currentTarget.value)
                    }
                  >
                    {schemaOptions.map((o) => (
                      <option
                        value={o.value}
                        key={o.value}
                        disabled={o.value === schema.value}
                      >
                        {o.label}
                      </option>
                    ))}
                  </select>
                  <button className="btn bg-primary-subtle fw-semibold">
                    —
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="d-flex align-items-center gap-2">
          <div className="dot bg-secondary-subtle rounded-circle"></div>
          <select
            className="form-select"
            aria-label="Default select example"
            value={selectedSchema.value ? JSON.stringify(selectedSchema) : ""}
            onChange={(e) =>
              setSelectedSchema(
                e.currentTarget.value
                  ? JSON.parse(e.currentTarget.value)
                  : { value: "", label: "" }
              )
            }
          >
            <option value="">Add schema to segment</option>
            {schemaOptions.map((option) => (
              <option value={JSON.stringify(option)} key={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <button className="btn bg-primary-subtle fw-semibold">—</button>
        </div>
        <div className="ps-3">
          <p
            onClick={addNewSchema}
            className="fs-6 fw-semibold text-success text-decoration-underline cursor-pointer"
          >
            Add new schema
          </p>
        </div>
      </div>
      <div className="mt-auto py-4 px-3 d-flex justify-content-start align-items-center bg-light">
        <div className="btn btn-success btn-sm" onClick={sendToServer}>
          Save the Segment
        </div>
        <button
          type="button"
          className="btn btn-light text-danger btn-sm ms-3"
          data-bs-dismiss="offcanvas"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SaveSegment;
