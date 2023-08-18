Number.prototype.formatMoney = function(c, d, t){
	var n = this,
		c = isNaN(c = Math.abs(c)) ? 2 : c,
		d = d == undefined ? "." : d,
		t = t == undefined ? "," : t,
		s = n < 0 ? "-" : "",
		i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
		j = (j = i.length) > 3 ? j % 3 : 0;
	return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

function Limpiar()
{
    const table = document.getElementById("TablaCarrito");
    const rows = table.getElementsByTagName("tr");


    // Empezamos desde la segunda fila (índice 1)
    for (let i = rows.length - 2; i > 0; i--) {
        table.deleteRow(i);
    }

    totalCompra.innerHTML = 0.00;
}

function habilitarBotonCompra() {
    const botonCompra = document.getElementById("boton-comprar");
    const productosAgregados = facturacion.productosAgregados; // Asegúrate de que esta variable esté definida y sea accesible aquí

    if (productosAgregados.length < 0) {
      botonCompra.disabled = true;
    } else {
      botonCompra.disabled = false;
    }
  };

$(document).ready(function() {
	$("#boton-comprar").click(function() {
	  $(".mensaje-emergente").fadeIn().delay(1500).fadeOut();
	});
  });
  

new Vue({
	el: '#app',
	data: {
		productos: [
			{
                'producto': "Adidas_1",
                'descripcion': 'ADIDAS -- Run Falcon',
                'precio': '56500'
            },
            {
                'producto': "Adidas_2",
                'descripcion': 'ADIDAS -- Solar Control',
                'precio': '114900'
            },
            {
                'producto': "Adidas_3",
                'descripcion': 'ADIDAS -- LTRA BOOST WEB DNA',
                'precio': '153500'
            },
            {
                'producto': "Adidas_4",
                'descripcion': 'ADIDAS -- ALPHA BOUNCE',
                'precio': '65600'
            },
            {
                'producto': 'Nike_1',
                'descripcion': 'NIKE -- Invincible 3',
                'precio': '112800'
            },
            {
                'producto': 'Nike_2',
                'descripcion': 'NIKE -- Air Force 1 07 Essential',
                'precio': '77900'
            },
            {
                'producto': 'Nike_3',
                'descripcion': 'NIKE -- Juniper Trail 2',
                'precio': '53500'
            },
            {
                'producto': "'Nike_4'",
                'descripcion': 'NIKE -- Deviate NITRO™ Elite Fireglow',
                'precio': '95000'
            },
            {
                'producto': "Puma_1",
                'descripcion': 'PUMA -- FIRST MILE Electrify NITRO™ 3',
                'precio': '60900'
            },
            {
                'producto': "Puma_2",
                'descripcion': 'PUMA -- Deviate NITRO™ 2',
                'precio': '86300'
            },
            {
                'producto': "Puma_3",
                'descripcion': 'PUMA -- ForeverRUN NITRO™ Futrograde',
                'precio': '88500'
            },
            {
                'producto': "Puma_4",
                'descripcion': 'PUMA -- Deviate NITRO™ Elite 2 Fireglow',
                'precio': '110900'
            }
		],
		facturacion: {
			productoSeleccionado: {
				producto: '',
				cantidad: 1
			},
			productosAgregados: []
		}
	},
	methods: {
		agregarLinea: function(){
			var productoSeleccionado = this.facturacion.productoSeleccionado,
			existe = this.facturacion.productosAgregados.find(function(el){
				return el.producto == productoSeleccionado.producto;
			});

			if(!existe){
				this.facturacion.productosAgregados.push({
					producto: productoSeleccionado.producto,
					descripcion: productoSeleccionado.descripcion,
					precio: productoSeleccionado.precio,
					cantidad: productoSeleccionado.cantidad
				});
			}else{
				var lineaFactura = this.facturacion.productosAgregados.find(function(el){
					if(el.producto == productoSeleccionado.producto){
						return el.cantidad;
					}
				});

				lineaFactura.cantidad = parseInt(lineaFactura.cantidad) +
					parseInt(productoSeleccionado.cantidad);
			}
		},
		infoProductoSeleccionado: function(){
			var producto = this.facturacion.productoSeleccionado.producto;

			if(producto){
				info = this.productos.find(function(linea){
					if(linea.producto == producto){
						return linea;
					}
				});

				this.facturacion.productoSeleccionado.descripcion = info.descripcion;
				this.facturacion.productoSeleccionado.precio = info.precio;
			}
		},
		eliminarLinea: function(indice){
			this.facturacion.productosAgregados.splice(indice, 1);

		}
	},
	computed: {
		totalLineas: function(){
			var total = 0;

			this.facturacion.productosAgregados.forEach(function(el){
				total += el.cantidad * el.precio;
			});

			return (total).formatMoney(2, '.', ',');
		}
	}
});
