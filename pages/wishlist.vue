<template>
  <div>
    <div class="container">
      <div class="card shopping-cart">
        <div class="card-header text-light">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          Your wishlist
          <a
            href
            class="btn btn-info btn-sm btnBuy pull-right"
          >Continiu shopping</a>
          <div class="clearfix"></div>
        </div>
        <div class="card-body">
          <!-- PRODUCT -->
          <div class="row">
            <div class="col-12 col-sm-12 col-md-2 text-center">
              <img
                class="img-responsive"
                src="http://placehold.it/120x80"
                alt="prewiew"
                width="120"
                height="80"
              />
            </div>
            <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6 productInfo">
              <h4 class="product-name">
                <strong>Product Name</strong>
              </h4>
              <h4>
                <small>Product description</small>
              </h4>
            </div>
            <div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
              <div class="col-3 col-sm-3 col-md-6 text-right exactPrice">
                <h6>
                  <strong>
                    25.00
                    <span class="text-muted">x</span>
                  </strong>
                </h6>
              </div>
              <div class="col-4 col-sm-4 col-md-4">
                <div class="quantity">
                  <input type="button" value="+" class="plus" />
                  <input
                    type="number"
                    step="1"
                    max="99"
                    min="1"
                    value="1"
                    title="Qty"
                    class="qty"
                    size="4"
                  />
                  <input type="button" value="-" class="minus" />
                </div>
              </div>
              <div class="col-2 col-sm-2 col-md-2 text-right">
                <button type="button" class="btn btn-outline-danger btn-xs">
                  <i class="mdi mdi-delete"></i>
                </button>
              </div>
            </div>
          </div>
          <hr />
          <!-- END PRODUCT -->
          <!-- PRODUCT -->
          <div class="row">
            <div class="col-12 col-sm-12 col-md-2 text-center">
              <img
                class="img-responsive"
                src="http://placehold.it/120x80"
                alt="prewiew"
                width="120"
                height="80"
              />
            </div>
            <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6 productInfo">
              <h4 class="product-name">
                <strong>Product Name</strong>
              </h4>
              <h4>
                <small>Product description</small>
              </h4>
            </div>
            <div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
              <div class="col-3 col-sm-3 col-md-6 text-right exactPrice">
                <h6>
                  <strong>
                    25.00
                    <span class="text-muted">x</span>
                  </strong>
                </h6>
              </div>
              <div class="col-4 col-sm-4 col-md-4">
                <div class="quantity">
                  <input type="button" value="+" class="plus" />
                  <input
                    type="number"
                    step="1"
                    max="99"
                    min="1"
                    value="1"
                    title="Qty"
                    class="qty"
                    size="4"
                  />
                  <input type="button" value="-" class="minus" />
                </div>
              </div>
              <div class="col-2 col-sm-2 col-md-2 text-right">
                <button type="button" class="btn btn-outline-danger btn-xs">
                  <i class="mdi mdi-delete"></i>
                </button>
              </div>
            </div>
          </div>
          <hr />
          <!-- END PRODUCT -->

          <div class="row">
            <div class="col-md-6">
              <div class="coupon">
                <div class="row">
                  <div class="col-6">
                    <input type="text" class="form-control" placeholder="cupone code" />
                  </div>
                  <div class="col-6">
                    <input type="submit" class="btn btn-default" value="Use cupone" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="pull-right">
                <a href class="btn btn-outline-info pull-right">Update shopping cart</a>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="pull-right" style="margin: 10px">
            <a href class="btn btn-info pull-right btnBuy">Checkout</a>
            <div class="pull-right" style="margin: 5px">
              Total price:
              <b>$ 50.00</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>