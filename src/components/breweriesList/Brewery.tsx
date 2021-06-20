import { formatDate } from "../../Utils";
import { BreweryItem } from "../breweries/BreweriesReducer";
import Modal from "../modal/Modal";
import "./Brewery.css";

const Brewery = ({
  item,
  setShowItemId,
}: {
  item: BreweryItem;
  setShowItemId: any;
}) => (
  <Modal
    onClose={() => {
      setShowItemId("");
    }}
    show={true}
  >
    <div className="brewery-item">
      <div>
        <div>
          <span>id : </span> {item.id}
        </div>
        <div>
          <span>name : </span> {item.name}
        </div>
        <div>
          <span>brewery_type :</span> {item.brewery_type}
        </div>
        <div>
          <span>street: </span> {item.street}
        </div>
        <div>
          <span>address_2: </span> {item.address_2}
        </div>
        <div>
          <span>address_3: </span> {item.address_3}
        </div>
        <div>
          <span>city: </span> {item.city}
        </div>
        <div>
          <span>state:</span> {item.state}
        </div>
        <div>
          <span>county_province:</span> {item.county_province}
        </div>
      </div>
      <div>
        <div>
          <span>postal_code:</span> {item.postal_code}
        </div>
        <div>
          <span>country: </span> {item.country}
        </div>
        <div>
          <span>longitude: </span> {item.longitude}
        </div>
        <div>
          <span>latitude: </span> {item.latitude}
        </div>
        <div>
          <span>phone: </span> {item.phone}
        </div>
        <div>
          <span>website_url: </span> {item.website_url}
        </div>
        <div>
          <span>updated_at: </span> {formatDate(item.updated_at)}
        </div>
        <div>
          <span>created_at: </span> {formatDate(item.created_at)}
        </div>
      </div>
    </div>
  </Modal>
);

export default Brewery;
