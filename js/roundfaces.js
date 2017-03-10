/* MIT License

Copyright (c) 2017 Wim Vermost

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

function faces(obj) {
    var container_width = obj.size * $(".container-inner div").length * obj.density;
    $(".container-inner").css("width", container_width);

    var containerW = $(".container-outer div").width();
    var containerH = 350;
    var size;
    var positions = [];
    $('.picture').each(function() {
        var coords = {
            w: $(this).outerWidth(true),
            h: $(this).outerHeight(true)
        };
        var success = false;
        while (!success) {
            coords.x = parseInt(Math.random() * (containerW - coords.w));
            coords.y = parseInt(Math.random() * (containerH - coords.h));
            var success = true;
            $.each(positions, function() {
                if (
                    coords.x <= (this.x + this.w) &&
                    (coords.x + coords.w) >= this.x &&
                    coords.y <= (this.y + this.h) &&
                    (coords.y + coords.h) >= this.y
                ) {
                    success = false;
                }
            });
        }
        if (obj.random) {
            size = Math.floor((Math.random() * 30) + (obj.size - 30));
        } else {
            size = obj.size;
        }


        positions.push(coords);
        $(this).css({
            top: coords.y + 'px',
            left: coords.x + 'px',
            height: size,
            width: size
        });
    });
}
