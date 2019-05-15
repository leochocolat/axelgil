var canvas = document.getElementById("myCanvas");
var footer = document.getElementById("footer");

var values = {
	friction: 0.8,
	timeStep: 0.5,
	amount: 15,
	mass: 1,
	count: 0
};
values.invMass = 1 / values.mass;

var path, springs, path1;
var size = view.size * [2, 1];
var active = 1;

var Spring = function(a, b, strength, restLength) {
	this.a = a;
	this.b = b;
	this.restLength = restLength || 80;
	this.strength = strength ? strength : 0.55;
	this.mamb = values.invMass * values.invMass;
};

Spring.prototype.update = function() {
	var delta = this.b - this.a;
	var dist = delta.length;
	var normDistStrength = (dist - this.restLength) /	(dist * this.mamb) * this.strength;
	delta.y *= normDistStrength * values.invMass * 0.2;
	if (!this.a.fixed)
		this.a.y += delta.y;
	if (!this.b.fixed)
		this.b.y -= delta.y;
};


function createPath(strength) {
	path = new Path({
		fillColor: "#95b8e2"
	});
	springs = [];
	for (var i = 0; i <= values.amount; i++) {
		var segment = path.add(new Point(i / values.amount, 0.5) * size);
		var point = segment.point;
		if (i == 0 || i == values.amount)
			point.y += size.height;
		point.px = point.x;
		point.py = point.y;
		// The first two and last two points are fixed:
		point.fixed = i < 2 || i > values.amount - 2;
		if (i > 0) {
			var spring = new Spring(segment.previous.point, point, strength);
			springs.push(spring);
		}
	}
	path.closed = true;
	path.position.x -= size.width / 4;
	path1 = path.clone();
	path1.style.fillColor = "#4f6ab1"
	return path
}

function onResize() {
	if (path)
		path.remove();

	if(path1)
		path1.remove();

	size = view.bounds.size * [2, 1];
	path = createPath(0.1);
}

function onMouseMove(event) {
	var location = path.getNearestLocation(event.point);
	var segment = location.segment;
	var point = segment.point;

	if (!point.fixed && location.distance < size.height / 4) {
		active = 0;
		var y = event.point.y;
		point.y += (y - point.y) / 6;
		if (segment.previous && !segment.previous.fixed) {
			var previous = segment.previous.point;
			previous.y += (y - previous.y) / 24;
		}
		if (segment.next && !segment.next.fixed) {
			var next = segment.next.point;
			next.y += (y - next.y) / 24;
		}
	}
}

function onFrame(event) {
	wave(event);
	updateWave(path);
}

$("#myCanvas").mouseleave(function() {
	setTimeout(function() {
		active = 1;
	}, 1000)
})

function wave(event) {
	for (var i = 0; i < path.segments.length; i++) {
		var segment = path.segments[i];
		var sinus = Math.sin(event.time * 3 + i);
		if(segment.point.y <= canvas.height) {
      segment.point.y = sinus * 8 + 85
    }
	}
	for (var i = path1.segments.length - 1; i >= 0; i--) {
		var segment1 = path1.segments[i]
		var sinus = Math.sin(-event.time * 3 + i);
		if(segment1.point.y <= canvas.height) {
      segment1.point.y = sinus * 8 + 100
    }
	}
}

function updateWave(path) {
	var force = 1 - values.friction * values.timeStep * values.timeStep;
	for (var i = 0, l = path.segments.length; i < l; i++) {
		var point = path.segments[i].point;
		var dy = (point.y - point.py) * force;
		point.py = point.y;
		point.y = Math.max(point.y + dy, 0);
	}

	for (var j = 0, l = springs.length; j < l; j++) {
		springs[j].update();
	}
	path.smooth({type:'continuous'});
	path1.smooth({type:'continuous'});
}

$(document).ready(function() {
	var pointsY = [];
  for(i=0; i < path.segments.length; i++) {
    var y = path.segments[i].point;
    if(y.y <= canvas.height) {
      pointsY.push(y);
    }
  };

});
