import { getInvoice } from "./services/invoiceServices";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";

export const InvoiceApp = () => {
  const { id, name, client, company, items, total } = getInvoice();
  return (
    <>
      <div className="container">
        <div className="card my-3">
          <div className="card-header">Invoice Example</div>

          <div className="card-body">
            <InvoiceView id={id} name={name} />

            <div className="row my-3">
              <div className="col">
                <ClientView title="Client Data" client={client} />
              </div>

              <div className="col">
                <CompanyView title="Company Data" company={company} />
              </div>
            </div>

            <ListItemsView title="Invoice Products" items={items} />
            <TotalView total={total} />
            <form>
              <input
                type="text"
                name="product"
                placeholder="Product"
                className="form-control m-3"
                onChange={(event) => {
                  console.log(event.target.value);
                }}
              />
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="form-control m-3"
                onChange={(event) => {
                  console.log(event.target.value);
                }}
              />
              <input
                type="text"
                name="quantity"
                placeholder="Quantity"
                className="form-control m-3"
                onChange={(event) => {
                  console.log(event.target.value);
                }}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
