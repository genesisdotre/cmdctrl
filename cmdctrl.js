(function() {
  if (!window.Zepto && !window.jQuery) {
    alert("Zepto or jQuery has to be included");
  }
	
  // TODO: server via protocol independent URL scheme
	$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'http://genesis.re/cmdctrl/cmdctrl.css') );

	$(function() {

    //var endpoint = "http://services.stefanow.net/mailchimp/subscribe";
    var endpoint = "http://mailchimp-sub.herokuapp.com/subscribe";
    

		$("body").append($(

      "<canvas id='animation'></canvas>" +

			"<div id='fade'></div>" +

			"<div id='overlay'>" +

			"	<a href='#' id='closebutton'>" +
			"		<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2OUQxNjM5RERBQTgxMUUzOEFBN0FEQzhCNzc1MThGNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2OUQxNjM5RURBQTgxMUUzOEFBN0FEQzhCNzc1MThGNCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjY5RDE2MzlCREFBODExRTM4QUE3QURDOEI3NzUxOEY0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY5RDE2MzlDREFBODExRTM4QUE3QURDOEI3NzUxOEY0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+pf2f4gAABtFJREFUeNq0Vw1M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'/>" +
			"	</a>" +

      "Hi, my name is Michal Stefanow and I build internet.<br>" +

      "Favourite portfolio items:" +
      "<a href='http://michalstefanow.com/portfolio/boomtodo.png' data-lightbox='roadtrip'><img src='http://michalstefanow.com/portfolio/boomtodo-small.jpg'></a>" +
      "<a href='http://michalstefanow.com/portfolio/basialipskalarsen.jpg' data-lightbox='roadtrip'><img src='http://michalstefanow.com/portfolio/basialipskalarsen-small.jpg'></a>" +
      "<a href='http://michalstefanow.com/portfolio/buchbilety.jpg' data-lightbox='roadtrip'><img src='http://michalstefanow.com/portfolio/buchbilety-small.jpg'></a>" +
      "<a href='http://michalstefanow.com/portfolio/patrykwieczorek.png' data-lightbox='roadtrip'><img src='http://michalstefanow.com/portfolio/patrykwieczorek-small.jpg'></a>" +
      "<a href='http://michalstefanow.com/portfolio/secondsme.png' data-lightbox='roadtrip'><img src='http://michalstefanow.com/portfolio/secondsme-small.jpg'></a>" +

      "The best way to reach me: <strong><a href='mailto:mstefanow@gmail.com'>mstefanow@gmail.com</a></strong> <br><br>" +

      "Sign up to my very occassional newsletter:<br>" +

			"	<div id='mc_embed_signup'>" +
			"	<form action='" + endpoint + "' method='post' id='mc-embedded-subscribe-form-XXX' name='mc-embedded-subscribe-form' class='validate' target='_blank' novalidate>" +
			"		<input type='email' value='' name='EMAIL' class='email' id='mce-EMAIL-XXX' placeholder='email address' required>" +
			"		<div style='position: absolute; left: -5000px;'><input type='text' name='b_f7d4defd21860779ebd2e03af_e6e9f2a096' tabindex='-1' value=''></div>" +
			"		<div class='clear'><input type='submit' value='Count me in' name='subscribe' id='mc-embedded-subscribe' class='button'></div>" +
			"	</form>" +
			"	</div>" +

			"	<span class='closetext' id='closetext'> " +
			"		<a href='#'>close this popup</a> " +
			"	</span> " +

			"</div>"
		));
  
    var _closePopup = function() {
      // 'display' property cannot be animated --> animating opactity
      // when animating opacity has finished, only then it is properly hidden

      $("#overlay").addClass("hidden");
      $("#fade").addClass("hidden");
      $("#animation").addClass("hidden");
      setTimeout(function() { 
        $("#overlay").addClass('properlyhidden');
        $("#fade").addClass('properlyhidden') , 
        $("#animation").addClass('properlyhidden') 
      }, 1000);
    };

		$("#closebutton, #closetext").on("click", _closePopup);

    $("#mc-embedded-subscribe-form-XXX").on("submit", function() {
      var email = $("#mce-EMAIL-XXX").val();

      $.post(endpoint, { email: email } );

      _closePopup();
      return false; 
    });

    backgroundAnimationInit();
	});

/*  --- backgroundAnimation --- Based on an algorithm by Patric Lardin --- */
  var now = new Date();
  var timer, intervalTimer = 55;
  var canvas, context;
  var canvas_width = window.innerWidth;
  var canvas_height = window.innerHeight;
  var follow_distance = canvas_width / 2.33;
  var stir_distance = canvas_width / 34;
  var blow_distance = canvas_width / 21;
  var num_vertices = 89;
  var vertices = [];
  var viscosity = 0.98;
  var mouse_x, mouse_y, mouse_vx, mouse_vy, previous_mouse_x = 0, previous_mouse_y = 0;
  var is_mouse_down = false;
  var max_search_iterations = 34;
  var line_color = ( now.getHours() > 19 || now.getHours() < 8 ) ? 'rgb( 226, 98, 37 )' : 'rgb( 76, 199, 230 )';
  var fill_color = ( now.getHours() > 19 || now.getHours() < 8 ) ? 'rgba( 0, 0, 0, 0.2 )' : 'rgba( 0, 0, 0, 0.2 )';
  
  function backgroundAnimationInit() {
    canvas = document.getElementById( 'animation' );
    //clock = document.getElementById( 'countDown' );
    if ( canvas.getContext ) {
      setup();
      timer = setInterval( loop, intervalTimer );
      //setInterval( countDown, 500 );
    }
  }

  function setup() {
    context = canvas.getContext( '2d' );
    //clockCTX = clock.getContext( '2d' );
    var i = num_vertices;
    canvas_width = canvas.width = window.innerWidth;
    canvas_height = canvas.height = window.innerHeight;
    while( i-- ) {
      var vertex = new Vertex( canvas_width / 2, 111 );
      vertex.vx = Math.cos( i ) * Math.random() * 55;
      vertex.vy = Math.sin( i ) * Math.random() * 55;
      vertices.push( vertex );
    }
    document.onmousedown = on_mouse_down;
    document.onmouseup = on_mouse_up;
    document.onmousemove = on_mouse_move;
    window.onresize = on_resize_window;
    document.addEventListener( 'touchstart', on_mouse_up, false );
    document.addEventListener( 'touchmove', on_touch_move, false );
    document.addEventListener( 'touchend', on_mouse_down, false );
    document.addEventListener( 'orientationchange', on_resize_window, false );
  }
  function on_resize_window ( e ) {
    canvas_width = canvas.width = window.innerWidth;
    canvas_height = canvas.height = window.innerHeight;
    context.clearRect( 0, 0, canvas_width, canvas_height );
  }
  function on_mouse_move( e ) {
    var ev = e ? e : window.event;
    mouse_x = ev.clientX;
    mouse_y = ev.clientY;
  }
  function on_touch_move( e ) {
    if ( e.touches.length == 1 ) {
      //e.preventDefault(); 
      mouse_x = e.touches[ 0 ].pageX;
      mouse_y = e.touches[ 0 ].pageY;
    }
  }
  function on_mouse_down( e ) {
    is_mouse_down = true;
    //return false;
  }
  function on_mouse_up( e ) {
    is_mouse_down = false;
    return false;
  }

  function loop() {
    clearInterval( timer );
    context.fillStyle = fill_color;
    context.fillRect( 0, 0, canvas_width, canvas_height );
    mouse_vx = mouse_x - previous_mouse_x;
    mouse_vy = mouse_y - previous_mouse_y;
    previous_mouse_x = mouse_x;
    previous_mouse_y = mouse_y;
    
    edges.length = 0
    circumcenters.length = 0
    infinite_vertices.each( function( vertex ) { vertex.is_infinity = true; });
    edges[ 0 ] = make_quadedge();
    edges[ 2 ] = make_quadedge();
    edges[ 0 ].set_org_dest( infinite_vertices[ 1 ], infinite_vertices[ 2 ] );
    edges[ 2 ].set_org_dest( infinite_vertices[ 1 ], infinite_vertices[ 0 ] );
    edges[ 0 ].splice( edges[ 2 ] );
    edges[ 2 ] = edges[2].sym();
    edges[ 1 ] = connect( edges[ 0 ], edges[ 2 ] );
    edge = edges[ 0 ];
    var i = num_vertices;
    
    while ( i-- ) {
      var vertex = vertices[ i ];
      var x = vertex.x;
      var y = vertex.y;
      var vx = vertex.vx;
      var vy = vertex.vy;
      var dx = x - mouse_x;
      var dy = y - mouse_y;
      var distance = Math.sqrt( dx * dx + dy * dy );
      var angle = Math.atan2( dy, dx );
      var cos_angle = Math.cos( angle );
      var sin_angle = Math.sin( angle );
      if ( is_mouse_down ) if ( distance < blow_distance ) {
        var blow_acceleration = ( 1 - ( distance / blow_distance ) ) * 13;
        vx += cos_angle * blow_acceleration + 0.5 - Math.random();
        vy += sin_angle * blow_acceleration + 0.5 - Math.random();
      }
      if ( distance < follow_distance ) {
        var follow_acceleration = ( 1 - ( distance / follow_distance ) ) * canvas_width * 0.000021;
        vx -= cos_angle * follow_acceleration;
        vy -= sin_angle * follow_acceleration;
      }
      if ( distance < stir_distance ) {
        var stir_acceleration = ( 1 - ( distance / stir_distance ) ) * canvas_width * 0.000089;
        vx += mouse_vx * stir_acceleration;
        vy += mouse_vy * stir_acceleration;
      }
      vx *= viscosity;
      vy *= viscosity;
      if ( Math.abs( vx ) < .1 ) vx *= Math.random() * 5;
      if ( Math.abs( vy ) < .1 ) vy *= Math.random() * 5;
      var next_x = x + vx;
      var next_y = y + vy;
      if ( next_x > canvas_width ) {
        next_x = canvas_width;
        vx *= -1;
      } else if ( next_x < 0 ) {
        next_x = 0;
        vx *= -1;
      }
      if ( next_y > canvas_height ) {
        next_y = canvas_height;
        vy *= -1;
      } else if ( next_y < 0 ) {
        next_y = 0;
        vy *= -1;
      }
      vertex.vx = vx;
      vertex.vy = vy;
      vertex.x = next_x;
      vertex.y = next_y;
      insert( vertex );
    }

    edges.each( function( an_edge ) { if ( !an_edge.is_infinite_edge()) draw_line( an_edge.right(), an_edge.left() ); });
    timer = setInterval( loop, intervalTimer );
  }

  function draw_line( from, to ) {
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo( from.x, from.y );
    context.lineTo( to.x, to.y );
    context.closePath();
    context.strokeStyle = line_color;
    context.stroke();
  }

  function Edge() {
    this.data = null;
    this.next = null;
    this.rot = null;
  }

  Edge.prototype.splice = function( e ) {
    var e_1 = this.next.rot;
    var e_2 = e.next.rot;
    var e_3 = this.next;
    this.next = e.next;
    e.next = e_3;
    var e_3 = e_1.next;
    e_1.next = e_2.next;
    e_2.next = e_3;
  }

  Edge.prototype.swap = function() {
    var e_0 = this.oprev();
    var e_1 = this.sym().oprev();
    this.splice( e_0 );
    this.sym().splice( e_1 );
    this.splice( e_0.lnext() );
    this.sym().splice( e_1.lnext() );
    this.set_org( e_0.dest() );
    this.set_dest( e_1.dest() );
  }

  Edge.prototype.sym = function() { return this.rot.rot; }
  Edge.prototype.irot = function() { return this.rot.rot.rot; }
  Edge.prototype.org = function() { return this.data; }
  Edge.prototype.set_org = function( v ) { this.data = v; }
  Edge.prototype.right = function() { return this.rot.data; }
  Edge.prototype.set_right = function( v ) { this.rot.data = v; }
  Edge.prototype.dest = function() { return this.rot.rot.data; }
  Edge.prototype.set_dest = function( v ) { this.rot.rot.data = v; }
  Edge.prototype.left = function() { return this.rot.rot.rot.data; }
  Edge.prototype.set_left = function( v ) { this.rot.rot.rot.data = v; }
  Edge.prototype.set_org_dest = function( o, d ) { this.set_org( o ); this.set_dest( d ); }
  Edge.prototype.onext = function() { return this.next; }
  Edge.prototype.rnext = function() { return this.rot.next.rot.rot.rot; }
  Edge.prototype.dnext = function() { return this.rot.rot.next.rot.rot; }
  Edge.prototype.lnext = function() { return this.rot.rot.rot.next.rot; }
  Edge.prototype.oprev = function() { return this.rot.next.rot; }
  Edge.prototype.rprev = function() { return this.rot.rot.next; }
  Edge.prototype.dprev = function() { return this.rot.rot.rot.next.rot.rot.rot; }
  Edge.prototype.lprev = function() { return this.next.rot.rot; }
  Edge.prototype.is_crust = function() { return in_circle( this.left(), this.org(), this.right(), this.dest() ); }
  Edge.prototype.is_infinite_edge = function() { return this.org().is_infinity || this.dest().is_infinity; }
  Edge.prototype.vertex_left_of = function( v ) { return area( v, this.org(), this.dest() ) < 0.0; }
  Edge.prototype.vertex_right_of = function( v ) { return area( v, this.org(), this.dest() ) > 0.0; }
  Edge.prototype.vertex_colinear = function( v ) { return area( v, this.org(), this.dest() ) == 0.0; }

  function Vertex( x, y ) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.is_infinity = false;
  }

  Vertex.prototype.equals = function(v) { return this.x == v.x && this.y == v.y; }

  function in_circle( v0, v1, v2, v3 ) {
    var circle_test = ( v2.x - v1.x ) * ( v3.y - v1.y ) * ( v0.x * v0.x + v0.y * v0.y - v1.x * v1.x - v1.y * v1.y )
    + ( v3.x - v1.x ) * ( v0.y - v1.y ) * ( v2.x * v2.x + v2.y * v2.y - v1.x * v1.x - v1.y * v1.y )
    + ( v0.x - v1.x ) * ( v2.y - v1.y ) * ( v3.x * v3.x + v3.y * v3.y - v1.x * v1.x - v1.y * v1.y )
    - ( v2.x - v1.x ) * ( v0.y - v1.y ) * ( v3.x * v3.x + v3.y * v3.y - v1.x * v1.x - v1.y * v1.y )
    - ( v3.x - v1.x ) * ( v2.y - v1.y ) * ( v0.x * v0.x + v0.y * v0.y - v1.x * v1.x - v1.y * v1.y )
    - ( v0.x - v1.x ) * ( v3.y - v1.y ) * ( v2.x * v2.x + v2.y * v2.y - v1.x * v1.x - v1.y * v1.y );
    return circle_test >= 0.0;
  }

  function area( v0, v1, v2 ) { return ( v1.x - v0.x ) * ( v2.y - v0.y ) - ( v2.x - v0.x ) * ( v1.y - v0.y ); }

  var rot_map = [ 1, 2, 3, 0 ];
  var next_map = [ 0, 3, 2, 1 ];
  
  function make_quadedge() {
    var e = [ new Edge(), new Edge(), new Edge(), new Edge() ];
    for ( var ie = 0; ie < 4; ie++ ) {
      e[ ie ].rot = e[ rot_map[ ie ] ];
      e[ ie ].next = e[ next_map[ ie ] ];
    }
    return e[ 0 ];
  }

  Array.prototype.each = function( f ) { 
    for ( var ia = 0; ia < this.length; ia++ ) f( this[ ia ] );
  }
  function delete_quadedge( q ) { 
    disconnect_edge(q); 
    [ q, q.rot, q.sym(), q.irot() ].each( function( qq ) { 
      delete qq; 
    });
  }


  var edge = null;
  var edges = [];
  var circumcenters = [];
  var infinite_vertices = [ 
    new Vertex( 0.0, -5000.0 ), 
    new Vertex( -5000.0, 5000.0 ), 
    new Vertex( 5000.0, 10000.0 )
  ];

  function is_inside_cosmic_triangle( v ) {
    var cosmic = true;
    [
      edges[ 0 ], 
      edges[ 1 ], 
      edges[ 2 ]
    ].each( function(e) {
      cosmic &= e.vertex_left_of( v ); 
    });
    return cosmic;
  }

  function locate( v ) {
    var search_iterations = 0;
    if ( edge.vertex_right_of( v ) ) edge = edge.sym();
    while ( true ) {
      if ( search_iterations++ > max_search_iterations || v.equals( edge.org() ) || v.equals( edge.dest() ) ) { throw "Exception"; }
      if ( !edge.onext().vertex_right_of( v ) ) { 
        edge = edge.onext(); 
        continue; 
      }
      if ( !edge.dprev().vertex_right_of( v ) ) { 
        edge = edge.dprev();
        continue;
      }
      return edge;
    }
  }

  function disconnect_edge( e ) {
    e.splice( e.oprev() );
    e.sym().splice( e.sym().oprev() );
  }

  function circumcenter( v0, v1, v2 ) {
    var denominator = ( v1.y - v2.y ) * ( v1.x - v0.x ) - ( v1.y - v0.y ) * ( v1.x - v2.x );
    var num0 = ( ( v0.x + v1.x ) * ( v1.x - v0.x ) ) / 2.0 + ( ( v1.y - v0.y ) * ( v0.y + v1.y ) ) / 2.0;
    var num1 = ( ( v1.x + v2.x ) * ( v1.x - v2.x ) ) / 2.0 + ( ( v1.y - v2.y ) * ( v1.y + v2.y ) ) / 2.0;
    var x = ( num0 * ( v1.y - v2.y ) - num1 * ( v1.y - v0.y ) ) / denominator;
    var y = ( num1 * ( v1.x - v0.x ) - num0 * ( v1.x - v2.x ) ) / denominator;
    var c = new Vertex( x, y );
    circumcenters.push( c );
    return c;
  }

  function connect( e0, e1 ) {
    var e2 = make_quadedge();
    e2.set_org_dest( e0.dest(), e1.org() );
    e2.splice( e0.lnext() );
    e2.sym().splice( e1 );
    return e2;
  }

  function set_circumcenter( e, cc ) {
    var cc = circumcenter( e.dest(), e.org(), e.onext().dest() );
    circumcenters.push( cc );
    e.set_left( cc );
    e.lnext().set_left( cc );
    e.lprev().set_left( cc );
  }

  function insert( vertex ) {
    if ( !is_inside_cosmic_triangle( vertex ) ) return;
    try {
      locate( vertex );
    } catch( exception ) {
      if ( exception == "Exception" ) return;
      alert( exception );
    }
    if ( edge.vertex_colinear( vertex ) ) {
      var tmp = edge.oprev();
      disconnect_edge(edge);
      delete_quadedge( edge );
      edge = tmp;
    }
    var e2 = make_quadedge();
    edges.push( e2 );
    var v1 = edge.org();
    e2.set_org_dest( v1, vertex );
    e2.splice( edge );
    do {
      var e2 = connect( edge, e2.sym() );
      edges.push( e2 );
      edge = e2.oprev();
    } while ( edge.dest() != v1 );
    while( true ) {
      var e3 = edge.oprev();
      if ( edge.vertex_right_of( e3.dest() ) && in_circle( vertex, edge.org(), e3.dest(), edge.dest() ) ) {
        edge.swap();
        set_circumcenter( edge );
        edge = edge.oprev();
      } else {
        if( edge.org() == v1 ) {
          set_circumcenter( edge );
          return;
        }
        set_circumcenter( edge );
        edge = edge.onext().lprev();
      }
    }
  }

/* --- polarClock --- */

  var msPerDay = 24 * 60 * 60 * 1000,
    BigDay = new Date('July 29, 2014 1:00'),
    timeLeft = ( BigDay.getTime() - now.getTime() ),
    e_daysLeft = timeLeft / msPerDay,
    daysLeft = Math.floor( e_daysLeft ),
    clock, 
    clockCTX;

  function countDown() {
    now = new Date();
    timeLeft = ( BigDay.getTime() - now.getTime() );
    e_daysLeft = timeLeft / msPerDay;
    daysLeft = Math.floor( e_daysLeft );
    var e_hrsLeft = ( e_daysLeft - daysLeft ) * 24,
      hrsLeft = Math.floor( e_hrsLeft ),
      e_minsLeft = ( e_hrsLeft - hrsLeft ) * 60,
      minsLeft = Math.floor( e_minsLeft ),
      e_secsLeft = ( e_minsLeft - minsLeft ) * 60,
      secsLeft = Math.floor( e_secsLeft ),
      secPer = secsLeft / 60,
      minPer = minsLeft / 60,
      hrPer = hrsLeft / 24;

    clockCTX.save();
    clockCTX.clearRect( 0, 0, 72, 72 );
      clockCTX.translate( 36, 36 );
    clockCTX.font = '16px Verdana';
    clockCTX.fillStyle = 'rgb( 255, 255, 255 )';
    clockCTX.textAlign = 'center';
    clockCTX.shadowColor = 'rgba( 0, 0, 0, 1 )';
    clockCTX.shadowBlur = 5;
    clockCTX.shadowOffsetX = 2;
    clockCTX.shadowOffsetY = 2;
    clockCTX.fillText( daysLeft, 0, 6, 44 );
    clockCTX.rotate( - Math.PI / 2);
    clockCTX.lineWidth = 2;           
    
    writeTime( clockCTX, 21, hrPer );
    writeTime( clockCTX, 24, minPer );
    writeTime( clockCTX, 27, secPer );

    clockCTX.restore();
  }

  function writeTime( ctx, radius, per ){
    ctx.strokeStyle = 'rgba( 255, 255, 255, 0.8 )';// calculateColor( per );
    ctx.beginPath();
    partialCircle( ctx, 0, 0, radius, per );
    ctx.shadowColor = 'rgba( 0, 0, 0, 1 )';
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.stroke(); 
  }   

  function calculateColor( per ) {
    return 'rgba( '+ Math.round( 255 * ( per * 2 )  ) + ', ' + Math.round( 255 * ( per * 2 ) ) + ', ' + Math.round( 255 * ( per * 2 ) ) + ', .8 )';
  }      

  function partialCircle( ctx, x, y, rad, percentage ) {
    return ctx.arc(x, y, rad, 0, percentage * ( Math.PI * 2 ), false);
  }

})();

