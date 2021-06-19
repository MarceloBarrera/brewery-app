import Modal from "../modal/Modal";

const Brewery = (props: any) => (
  <Modal
    onClose={() => {
      props.setShowItemId("");
    }}
    show={true}
  >
    <p> id : {props.item.id}</p>
    <p> name : {props.item.name}</p>
    <p> brewery_type : {props.item.brewery_type}</p>
    <p> street: {props.item.street}</p>
    <p> address_2: {props.item.address_2} </p>
    <p> address_3: {props.item.address_3}</p>
    <p> city: {props.item.city}</p>
    <p> state: {props.item.state}</p>
    <p> county_province: {props.item.county_province}</p>
    <p> postal_code: {props.item.postal_code}</p>
    <p> country: {props.item.country} </p>

    <p> longitude: {props.item.longitude}</p>
    <p> latitude: {props.item.latitude}</p>
    <p> phone: {props.item.phone} </p>

    <p> website_url: {props.item.website_url}</p>
    <p> updated_at: {props.item.updated_at}</p>
    <p> created_at: {props.item.created_at} </p>
  </Modal>
);

export default Brewery;
