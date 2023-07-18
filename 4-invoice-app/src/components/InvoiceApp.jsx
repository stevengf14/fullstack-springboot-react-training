import { getInvoice } from "../services/invoiceServices";
import { ClientView } from "./ClientView";
import { CompanyView } from "./CompanyView";
import { InvoiceView } from "./InvoiceView";
import { ListItemsView } from "./ListItemsView";

export const InvoiceApp = () => {
  const { id, name, client, company, items } = getInvoice();
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
          </div>
        </div>
      </div>
    </>
  );
};
