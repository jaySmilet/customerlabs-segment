import React from "react";

type SchemaOption = {
  value: string;
  label: string;
};

const schemaOptions: SchemaOption[] = [
  { value: "first_name", label: "First Name" },
  { value: "last_name", label: "Last Name" },
  { value: "gender", label: "Gender" },
  { value: "account_name", label: "Account Name" },
  { value: "city", label: "City" },
  { value: "state", label: "State" },
];

const SaveSegment = () => {
  const [schemas, setSchemas] = React.useState<SchemaOption[]>([]);

  const addNewSchema = () => {
    setSchemas([...schemas, { value: "", label: "" }]);
  };
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex={-1}
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header px-4 py-6 text-white d-flex gap-4">
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
          />
        </div>
        <p className="text-left">
          To save your segment, you need to add the schemas to build query
        </p>
        <div className="d-flex justify-content-end align-items-center gap-4">
          <div className="d-flex align-items-center gap-1">
            <div className="dot bg-success rounded-circle"></div>- User Traits
          </div>
          <div className="d-flex align-items-center gap-1">
            <div className="dot bg-danger rounded-circle"></div>- Group Traits
          </div>
        </div>
        <div className="border border-primary p-2">
          <div className="d-flex flex-column align-items-center gap-4">
            {schemas.map((schema, index) => (
              <div
                className="w-100 d-flex justify-content-start align-items-center gap-2"
                key={index}
              >
                <div className="dot bg-success rounded-circle"></div>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  key={index}
                >
                  {schemaOptions.map((option) => (
                    <option
                      selected={option.value === schema.value}
                      value={option.value}
                      key={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
                <button className="btn bg-primary-subtle fw-semibold">—</button>
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex align-items-center gap-2">
          <div className="dot bg-secondary-subtle rounded-circle"></div>
          <select className="form-select" aria-label="Default select example">
            <option value="">Add schema to segment</option>
            {schemaOptions.map((option) => (
              <option value={option.value} key={option.value}>
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
        <div className="btn btn-success btn-sm">Save the Segment</div>
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
