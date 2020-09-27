<!-- SCRIPTS -->

<!-- JQuery -->
<script type="text/javascript" src="{{ asset('js/jquery-3.3.1.min.js') }}"></script>

<!-- Bootstrap tooltips -->
<script type="text/javascript" src="{{ asset('js/popper.min.js') }}"></script>

<!-- Bootstrap core JavaScript -->
<script type="text/javascript" src="{{ asset('js/bootstrap.min.js') }}"></script>
<!-- For product zoom hover -->
<script type="text/javascript" src="{{ asset('js/zoomsl.min.js') }}"></script>

<!-- MDB core JavaScript -->
<script type="text/javascript" src="{{ asset('js/clicktobuy.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/aleartify.js') }}"></script>

<script type="text/javascript">
    /* WOW.js init */
    new WOW().init();

    // Tooltips Initialization
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    // MDB Lightbox Init
    $(function () {
        $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
    });
</script>

<script>
    // Material Select Initialization
    $(document).ready(function () {
        $('.mdb-select').material_select();
    });
</script>
<script>
    // SideNav Initialization
    $(".button-collapse").sideNav();
</script>

 {{--Only for add to cart--}}
<script type="text/javascript">
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    function addTocart(product_id) {

        $.post('http://localhost/click_to_buy/public/api/carts/store',{
            product_id:product_id
        }).done(function (data) {
            data = JSON.parse(data);
            if(data.status == 'success'){
                // toast show
                alertify.set('notifier','position', 'top-right');
                alertify.success('Item added to cart successfully'+'<br/> To checkout <br/><a href="{{ route('carts') }}">Go to Checkout Page</a>');

                $("#totalItems").html(data.totalItems);

            }

        });
    }



</script>