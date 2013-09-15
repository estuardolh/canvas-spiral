/*
 * Spiral.js
 * 
 * Copyright 2013 estuardolh <estuardolh@gmail.com>
 * 
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 * MA 02110-1301, USA.
 */

/*
 * Initializer
 * @mcanvas: a Canvas object to draw
 * @mimg: an img object to draw over the canvas
 * */
function Spiral_ini(mcanvas, mimg){
	// set global variables
	this.mcanvas = mcanvas;
	this.mimg = mimg;
}

/*
 * Start the animation
 * @x: x position in the canvas
 * @y: y position in the canvas
 * @velocity: velocity where 1 is a very low(1 second / frame) velocity and 1000 is a very fast(a milisecond / frame) velocity.
 * */
function Spiral_start(x, y, velocity, dr){
	var ctx = mcanvas.getContext("2d");	// get 2d context from canvas
	
	// set global variables
	this.x = x;
	this.y = y;
	this.angle = 0;
	
	var animation = setInterval(function(){
		//this.mcanvas.width = mcanvas.width;	// clean/update canvas
		angle-=0.01;
		dr+=0.03;
		var x1 = this.x + dr*Math.cos(angle)-mimg.width/2;
		var y1 = this.y + dr*Math.sin(angle)-mimg.height/2;
		
		// if reach a x limit then stop the animation
		if(x1 > x+mcanvas.width/2){
			clearInterval(animation);
		}
		// draw image
		ctx.drawImage(mimg, x1, y1);
	}
	,1000/velocity);
}
