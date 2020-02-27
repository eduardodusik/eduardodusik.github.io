"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Main =
/*#__PURE__*/
function () {
  function Main() {
    _classCallCheck(this, Main);

    this.flkty = new Flickity('.projects__carousel', {
      // options
      cellAlign: 'left',
      contain: true,
      prevNextButtons: false,
      pageDots: false
    });
    this.flkty = new Flickity('.tech__carousel', {
      // options
      cellAlign: 'center',
      contain: true,
      prevNextButtons: false,
      pageDots: false
    });
    this.dissolve = {
      delay: 475,
      duration: 1500,
      reset: false
    };
    this.slideUp = {
      distance: '150%',
      origin: 'bottom',
      opacity: true,
      reset: false
    };
    this.slideLeft = {
      distance: '110%',
      origin: 'left',
      opacity: true,
      reset: false
    };
    this.slideRight = {
      distance: '150%',
      origin: 'right',
      opacity: true,
      reset: false
    };
    ScrollReveal().reveal('.slideUp', this.slideUp);
    ScrollReveal().reveal('.dissolve', this.dissolve);
    ScrollReveal().reveal('.slideLeft', this.slideLeft);
    ScrollReveal().reveal('.slideRight', this.slideRight);
    this.init();
  }

  _createClass(Main, [{
    key: "init",
    value: function init() {}
  }]);

  return Main;
}();

new Main();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6WyJNYWluIiwiZmxrdHkiLCJGbGlja2l0eSIsImNlbGxBbGlnbiIsImNvbnRhaW4iLCJwcmV2TmV4dEJ1dHRvbnMiLCJwYWdlRG90cyIsImRpc3NvbHZlIiwiZGVsYXkiLCJkdXJhdGlvbiIsInJlc2V0Iiwic2xpZGVVcCIsImRpc3RhbmNlIiwib3JpZ2luIiwib3BhY2l0eSIsInNsaWRlTGVmdCIsInNsaWRlUmlnaHQiLCJTY3JvbGxSZXZlYWwiLCJyZXZlYWwiLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztJQUFNQSxJOzs7QUFDRixrQkFBYTtBQUFBOztBQUNULFNBQUtDLEtBQUwsR0FBYSxJQUFJQyxRQUFKLENBQWEscUJBQWIsRUFBb0M7QUFDN0M7QUFDQUMsTUFBQUEsU0FBUyxFQUFFLE1BRmtDO0FBRzdDQyxNQUFBQSxPQUFPLEVBQUUsSUFIb0M7QUFJN0NDLE1BQUFBLGVBQWUsRUFBRSxLQUo0QjtBQUs3Q0MsTUFBQUEsUUFBUSxFQUFFO0FBTG1DLEtBQXBDLENBQWI7QUFRQSxTQUFLTCxLQUFMLEdBQWEsSUFBSUMsUUFBSixDQUFhLGlCQUFiLEVBQWdDO0FBQ3pDO0FBQ0FDLE1BQUFBLFNBQVMsRUFBRSxRQUY4QjtBQUd6Q0MsTUFBQUEsT0FBTyxFQUFFLElBSGdDO0FBSXpDQyxNQUFBQSxlQUFlLEVBQUUsS0FKd0I7QUFLekNDLE1BQUFBLFFBQVEsRUFBRTtBQUwrQixLQUFoQyxDQUFiO0FBUUEsU0FBS0MsUUFBTCxHQUFnQjtBQUNaQyxNQUFBQSxLQUFLLEVBQUUsR0FESztBQUVaQyxNQUFBQSxRQUFRLEVBQUUsSUFGRTtBQUdaQyxNQUFBQSxLQUFLLEVBQUU7QUFISyxLQUFoQjtBQU1BLFNBQUtDLE9BQUwsR0FBZTtBQUNYQyxNQUFBQSxRQUFRLEVBQUUsTUFEQztBQUVYQyxNQUFBQSxNQUFNLEVBQUUsUUFGRztBQUdYQyxNQUFBQSxPQUFPLEVBQUUsSUFIRTtBQUlYSixNQUFBQSxLQUFLLEVBQUU7QUFKSSxLQUFmO0FBT0EsU0FBS0ssU0FBTCxHQUFpQjtBQUNiSCxNQUFBQSxRQUFRLEVBQUUsTUFERztBQUViQyxNQUFBQSxNQUFNLEVBQUUsTUFGSztBQUdiQyxNQUFBQSxPQUFPLEVBQUUsSUFISTtBQUliSixNQUFBQSxLQUFLLEVBQUU7QUFKTSxLQUFqQjtBQU9BLFNBQUtNLFVBQUwsR0FBa0I7QUFDZEosTUFBQUEsUUFBUSxFQUFFLE1BREk7QUFFZEMsTUFBQUEsTUFBTSxFQUFFLE9BRk07QUFHZEMsTUFBQUEsT0FBTyxFQUFFLElBSEs7QUFJZEosTUFBQUEsS0FBSyxFQUFFO0FBSk8sS0FBbEI7QUFRQU8sSUFBQUEsWUFBWSxHQUFHQyxNQUFmLENBQXNCLFVBQXRCLEVBQWtDLEtBQUtQLE9BQXZDO0FBQ0FNLElBQUFBLFlBQVksR0FBR0MsTUFBZixDQUFzQixXQUF0QixFQUFtQyxLQUFLWCxRQUF4QztBQUNBVSxJQUFBQSxZQUFZLEdBQUdDLE1BQWYsQ0FBc0IsWUFBdEIsRUFBb0MsS0FBS0gsU0FBekM7QUFDQUUsSUFBQUEsWUFBWSxHQUFHQyxNQUFmLENBQXNCLGFBQXRCLEVBQXFDLEtBQUtGLFVBQTFDO0FBRUEsU0FBS0csSUFBTDtBQUNIOzs7OzJCQUVLLENBRUw7Ozs7OztBQUlMLElBQUluQixJQUFKIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTWFpbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuZmxrdHkgPSBuZXcgRmxpY2tpdHkoJy5wcm9qZWN0c19fY2Fyb3VzZWwnLCB7XHJcbiAgICAgICAgICAgIC8vIG9wdGlvbnNcclxuICAgICAgICAgICAgY2VsbEFsaWduOiAnbGVmdCcsXHJcbiAgICAgICAgICAgIGNvbnRhaW46IHRydWUsXHJcbiAgICAgICAgICAgIHByZXZOZXh0QnV0dG9uczogZmFsc2UsXHJcbiAgICAgICAgICAgIHBhZ2VEb3RzOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmZsa3R5ID0gbmV3IEZsaWNraXR5KCcudGVjaF9fY2Fyb3VzZWwnLCB7XHJcbiAgICAgICAgICAgIC8vIG9wdGlvbnNcclxuICAgICAgICAgICAgY2VsbEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgY29udGFpbjogdHJ1ZSxcclxuICAgICAgICAgICAgcHJldk5leHRCdXR0b25zOiBmYWxzZSxcclxuICAgICAgICAgICAgcGFnZURvdHM6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZGlzc29sdmUgPSB7XHJcbiAgICAgICAgICAgIGRlbGF5OiA0NzUsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxyXG4gICAgICAgICAgICByZXNldDogZmFsc2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnNsaWRlVXAgPSB7XHJcbiAgICAgICAgICAgIGRpc3RhbmNlOiAnMTUwJScsXHJcbiAgICAgICAgICAgIG9yaWdpbjogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IHRydWUsXHJcbiAgICAgICAgICAgIHJlc2V0OiBmYWxzZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2xpZGVMZWZ0ID0ge1xyXG4gICAgICAgICAgICBkaXN0YW5jZTogJzExMCUnLFxyXG4gICAgICAgICAgICBvcmlnaW46ICdsZWZ0JyxcclxuICAgICAgICAgICAgb3BhY2l0eTogdHJ1ZSxcclxuICAgICAgICAgICAgcmVzZXQ6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zbGlkZVJpZ2h0ID0ge1xyXG4gICAgICAgICAgICBkaXN0YW5jZTogJzE1MCUnLFxyXG4gICAgICAgICAgICBvcmlnaW46ICdyaWdodCcsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IHRydWUsXHJcbiAgICAgICAgICAgIHJlc2V0OiBmYWxzZVxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICBTY3JvbGxSZXZlYWwoKS5yZXZlYWwoJy5zbGlkZVVwJywgdGhpcy5zbGlkZVVwKTtcclxuICAgICAgICBTY3JvbGxSZXZlYWwoKS5yZXZlYWwoJy5kaXNzb2x2ZScsIHRoaXMuZGlzc29sdmUpO1xyXG4gICAgICAgIFNjcm9sbFJldmVhbCgpLnJldmVhbCgnLnNsaWRlTGVmdCcsIHRoaXMuc2xpZGVMZWZ0KTtcclxuICAgICAgICBTY3JvbGxSZXZlYWwoKS5yZXZlYWwoJy5zbGlkZVJpZ2h0JywgdGhpcy5zbGlkZVJpZ2h0KTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpe1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbm5ldyBNYWluKCk7XHJcbiJdLCJmaWxlIjoic2NyaXB0cy9tYWluLmpzIn0=
