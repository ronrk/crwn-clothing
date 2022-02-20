import { Component } from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectShopCollections } from "../../redux/shop/shop.selector";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionOverview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(ShopPage);

/* const {collections} = this.state
<div className="shop-page">
  {collections.map({id,...otherCollectionProps} => (
      <CollectionPreview />
  ))}
</div> */
