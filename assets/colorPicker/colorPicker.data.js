;(function(window, undefined){
	"use strict"

	const pepito = `.§app {
		color: #bbb;
		font-family: monospace, "Courier New", Courier, mono;
		font-size: 12px;
		line-height: 15px;
		font-weight: bold;
		cursor: default;
		width: 412px;
		height: 323px;
		border-top-left-radius: 7px;
		border-top-right-radius: 7px;
		border-bottom-right-radius: 7px;
		border-bottom-left-radius: 7px;
		background-color: #444;
	}
	.S {
		width: 266px;
		height: 177px;
	}
	.XS {
		width: 158px;
		height: 173px;
	}
	.XXS {
		height: 105px;
		width: 154px;
	}
	.no-alpha {
		height: 308px;
	}
	.no-alpha .§opacity,
	.no-alpha .§alpha {
		display: none;
	}
	.S.no-alpha {
		height: 162px;
	}
	.XS.no-alpha {
		height: 158px;
	}
	.XXS.no-alpha {
		height: 90px;
	}
	.§app,
	.§app div {
		border: none;
		padding: 0px;
		float: none;
		margin: 0px;
		outline: none;
		box-sizing: content-box;
	}
	.§app div {
		position: absolute;
	}
	.§slds .§curm,
	.§panel .§disp,
	.§panel .§nsarrow,
	.§app .§exit,
	.§app .§memo-cursor,
	.§app .§resize {
		background-image: url(_icons.png);
	}
	.§app .do-drag div {
		cursor: none;
	}
	.§app .§opacity,
	.§memo .§raster-bg,
	.§app .§raster {
		background-image: url(_bgs.png);
	}
	.§app .§slds {
		width: 287px;
		height: 256px;
		top: 10px;
		left: 10px;
		overflow: hidden;
		cursor: crosshair;
	}
	.S .§slds {
		width: 143px;
		height: 128px;
		left: 9px;
		top: 9px;
	}
	.XS .§slds {
		left: 7px;
		top: 7px;
	}
	.XXS .§slds {
		left: 5px;
		top: 5px;
	}
	.§slds div {
		width: 256px;
		height: 256px;
		left: 0px;
	}
	.S .§sldl-1,
	.S .§sldl-2,
	.S .§sldl-3,
	.S .§sldl-4 {
		width: 128px;
		height: 128px;
	}
	.XXS .§slds,
	.XXS .§slds .§sldl-1,
	.XXS .§slds .§sldl-2,
	.XXS .§slds .§sldl-3,
	.XXS .§slds .§sldl-4 {
		height: 64px;
	}
	.§slds .§sldr-1,
	.§slds .§sldr-2,
	.§slds .§sldr-3,
	.§slds .§sldr-4 {
		width: 31px;
		left: 256px;
		cursor: default;
	}
	.S .§sldr-1,
	.S .§sldr-2,
	.S .§sldr-3,
	.S .§sldr-4 {
		width: 15px;
		height: 128px;
		left: 128px;
	}
	.§slds .§curm {
		margin: -5px;
		width: 11px;
		height: 11px;
		background-position: -36px -30px;
	}
	.light .§curm {
		background-position: -7px -30px;
	}
	.§slds .§curl,
	.§slds .§curr {
		width: 0px;
		height: 0px;
		margin: -3px -4px;
		border: 4px solid;
		cursor: default;
		left: auto;
		background-image: none;
	}
	.§slds .§curl,
	.§app .§slds .§curl-dark,
	.hue-dark div.§curl {
		right: 27px;
		border-color: transparent transparent transparent #fff;
	}
	.light .§curl,
	.§app .§slds .§curl-light,
	.hue-light .§curl {
		border-color: transparent transparent transparent #000;
	}
	.S .§slds .§curl,
	.S .§slds .§curr {
		border-width: 3px;
	}
	.S .§slds .§curl-light,
	.S .§slds .§curl {
		right: 13px;
	}
	.§slds .§curr,
	.§app .§slds .§curr-dark {
		right: 4px;
		border-color: transparent #fff transparent transparent;
	}
	.light .§curr,
	.§app .§slds .§curr-light {
		border-color: transparent #000 transparent transparent;
	}
	.§app .§opacity {
		bottom: 44px;
		left: 10px;
		height: 10px;
		width: 287px;
		background-position: 0 -87px;
	}
	.S .§opacity {
		bottom: 27px;
		left: 9px;
		width: 143px;
		background-position: 0 -100px;
	}
	.XS .§opacity {
		left: 7px;
		bottom: 25px;
	}
	.XXS .§opacity {
		left: 5px;
		bottom: 23px;
	}
	.§opacity div {
		width: 100%;
		height: 16px;
		margin-top: -3px;
		overflow: hidden;
	}
	.§opacity .§opacity-slider {
		margin: 0 -4px;
		width: 0px;
		height: 8px;
		border-width: 4px;
		border-style: solid;
		border-color: #eee transparent;
	}
	.§app .§memo {
		bottom: 10px;
		left: 10px;
		width: 288px;
		height: 31px;
		background-color: #fff;
	}
	.S .§memo {
		height: 15px;
		width: 144px;
		left: 9px;
		bottom: 9px;
	}
	.XS .§memo {
		left: 7px;
		bottom: 7px;
	}
	.XXS .§memo {
		left: 5px;
		bottom: 5px;
	}
	.§memo div {
		position: relative;
		float: left;
		width: 31px;
		height: 31px;
		margin-right: 1px;
	}
	.S .§memo div {
		width: 15px;
		height: 15px;
	}
	.§app .§raster,
	.§memo .§raster-bg,
	.S .§memo .§raster,
	.S .§memo .§raster-bg {
		position: absolute;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
		width: 100%;
	}
	.S .§memo .§raster-bg {
		background-position: 0 -31px;
	}
	.§app .§raster {
		opacity: 0.2;
		background-position: 0 -49px;
	}
	.alpha-bg-b .§memo {
		background-color: #333;
	}
	.alpha-bg-b .§raster {
		opacity: 1;
	}
	.§memo .§memo-cursor {
		position: absolute;
		right: 0px;
		background-position: -26px -87px;
	}
	.§app .light .§memo-cursor {
		background-position: 3px -87px;
	}
	.S .§memo-cursor {
		background-position: -34px -95px;
	}
	.S .light .§memo-cursor {
		background-position: -5px -95px;
	}
	.§app .§panel {
		position: absolute;
		top: 10px;
		right: 10px;
		bottom: 10px;
		width: 94px;
		border-width: 1px;
		border-style: solid;
		border-color: #222 #555 #555 #222;
		overflow: hidden;
		background-color: #333;
	}
	.S .§panel {
		top: 9px;
		right: 9px;
		bottom: 9px;
	}
	.XS .§panel {
		display: none;
	}
	.§panel div {
		position: relative;
	}
	.§panel .§hsv,
	.§panel .§hsl,
	.§panel .§rgb,
	.§panel .§cmyk,
	.§panel .§Lab,
	.§panel .§alpha,
	.no-alpha .§panel .§HEX,
	.§panel .§HEX {
		width: 86px;
		margin: -1px 0px 1px 4px;
		padding: 1px 0px 3px;
		border-top-width: 1px;
		border-top-style: solid;
		border-top-color: #444;
		border-bottom-width: 1px;
		border-bottom-style: solid;
		border-bottom-color: #222;
		float: left;
	}
	.§panel .§hsv,
	.§panel .§hsl {
		padding-top: 2px;
	}
	.S .§hsv,
	.S .§hsl {
		padding-top: 1px;
	}
	.§panel .§HEX {
		border-bottom-style: none;
		border-top-width: 0px;
		margin-top: -4px;
		padding-top: 0px;
	}
	.no-alpha .§panel .§HEX {
		border-bottom-style: none;
	}
	.§panel .§alpha {
		border-bottom-style: none;
	}
	.S .rgb-r .§hsv,
	.S .rgb-g .§hsv,
	.S .rgb-b .§hsv,
	.S .rgb-r .§hsl,
	.S .rgb-g .§hsl,
	.S .rgb-b .§hsl,
	.S .hsv-h .§rgb,
	.S .hsv-s .§rgb,
	.S .hsv-v .§rgb,
	.S .hsl-h .§rgb,
	.S .hsl-s .§rgb,
	.S .hsl-l .§rgb,
	.S .§cmyk,
	.S .§Lab {
		display: none;
	}
	.§panel .§butt,
	.§panel .§labl {
		float: left;
		width: 14px;
		height: 14px;
		margin-top: 2px;
		text-align: center;
		border: 1px solid;
	}
	.§panel .§butt {
		border-color: #555 #222 #222 #555;
	}
	.§panel .§butt:active {
		background-color: #444;
	}
	.§panel .§labl {
		border-color: transparent;
	}
	.§panel .Lab-mode,
	.§panel .cmyk-mode,
	.§panel .hsv-mode,
	.§panel .hsl-mode {
		position: absolute;
		right: 0px;
		top: 1px;
		height: 50px;
	}
	.§panel .hsv-mode,
	.§panel .hsl-mode {
		top: 2px;
	}
	.§panel .cmyk-mode {
		height: 68px;
	}
	.hsl-h .hsl-h-labl,
	.hsl-s .hsl-s-labl,
	.hsl-l .hsl-l-labl,
	.hsv-h .hsv-h-labl,
	.hsv-s .hsv-s-labl,
	.hsv-v .hsv-v-labl {
		color: #f90;
	}
	.§panel .cmyk-mode,
	.§panel .hsv-mode,
	.rgb-r .rgb-r-butt,
	.rgb-g .rgb-g-butt,
	.rgb-b .rgb-b-butt,
	.hsv-h .hsv-h-butt,
	.hsv-s .hsv-s-butt,
	.hsv-v .hsv-v-butt,
	.hsl-h .hsl-h-butt,
	.hsl-s .hsl-s-butt,
	.hsl-l .hsl-l-butt,
	.§panel .rgb-r-labl,
	.§panel .rgb-g-labl,
	.§panel .rgb-b-labl,
	.§panel .alpha-butt,
	.§panel .HEX-butt,
	.§panel .Lab-x-labl {
		border-color: #222 #555 #555 #222;
		background-color: #444;
	}
	.no-rgb-r .rgb-r-labl,
	.no-rgb-g .rgb-g-labl,
	.no-rgb-b .rgb-b-labl,
	.mute-alpha .alpha-butt,
	.no-HEX .HEX-butt,
	.cmy-only .Lab-x-labl {
		border-color: #555 #222 #222 #555;
		background-color: #333;
	}
	.Lab-x-disp,
	.cmy-only .cmyk-k-disp,
	.cmy-only .cmyk-k-butt {
		visibility: hidden;
	}
	.§panel .HEX-disp {
		background-image: none;
	}
	.§panel .§disp {
		float: left;
		width: 48px;
		height: 14px;
		margin: 2px 2px 0px;
		cursor: text;
		text-align: left;
		text-indent: 3px;
		border-width: 1px;
		border-style: solid;
		border-color: #222 #555 #555 #222;
	}
	.§app .§nsarrow {
		position: absolute;
		top: 0px;
		left: -13px;
		width: 8px;
		height: 16px;
		display: none;
		background-position: -87px -23px;
	}
	.§app .start-change .§nsarrow {
		display: block;
	}
	.§app .do-change .§nsarrow {
		display: block;
		background-position: -87px -36px;
	}
	.do-change .§disp {
		cursor: default;
	}
	.§panel .§hide {
		display: none;
	}
	.§panel .§cont,
	.§panel .§cold {
		position: absolute;
		top: -5px;
		left: 0px;
		height: 3px;
		border: 1px solid #333;
	}
	.§panel .§cold {
		z-index: 1;
		background-color: #c00;
	}
	.§panel .§cont {
		margin-right: -1px;
		z-index: 2;
	}
	.§panel .contrast .§cont {
		z-index: 1;
		background-color: #ccc;
	}
	.§panel .orange .§cold {
		background-color: #f90;
	}
	.§panel .green .§cold {
		background-color: #4d0;
	}
	.§panel .§ctrl {
		position: absolute;
		bottom: 0px;
		left: 0px;
		width: 100%;
		background-color: #fff;
	}
	.alpha-bg-b .§ctrl,
	.§panel .§bres,
	.§panel .§bsav {
		background-color: #333;
	}
	.§panel .§col1,
	.§panel .§col2,
	.§panel .§bres,
	.§panel .§bsav {
		border-width: 1px;
		border-style: solid;
		border-color: #555 #222 #222 #555;
		float: left;
		width: 45px;
		line-height: 28px;
		text-align: center;
		top: 0px;
	}
	.§panel div div {
		height: 100%;
	}
	.S .§ctrl div {
		line-height: 25px;
	}
	.S .§panel .§bres,
	.S .§panel .§bsav {
		line-height: 26px;
	}
	.§app .§exit,
	.§app .§resize {
		right: 3px;
		top: 3px;
		width: 15px;
		height: 15px;
		background-position: 0 -52px;
	}
	.§app .§resize {
		top: auto;
		bottom: 3px;
		cursor: nwse-resize;
		background-position: -15px -52px;
	}
	.S .§exit {
		background-position: 1px -52px;
	}
	.XS .§resize,
	.XS .§exit {
		width: 10px;
		height: 10px;
		right: 0px;
		background-image: none;
	}
	.XS .§exit {
		top: 0px;
	}
	.XS .§resize {
		bottom: 0px;
	}
	.§app .§resizer,
	.§app .§resizer div {
		position: absolute;
		border: 1px solid #888;
		top: -1px;
		right: -1px;
		bottom: -1px;
		left: -1px;
		z-index: 2;
		display: none;
		cursor: nwse-resize;
	}
	.§app .§resizer div {
		border: 1px dashed #333;
		opacity: 0.3;
		display: block;
		background-color: #bbb;
	}
	`

	// see colorPicker.html for the following encrypted variables... will only be used in buildView()
	var _html = ('^§app alpha-bg-w">^§slds">^§sldl-1">$^§sldl-2">$^§sldl-3">$^§curm">$^§sldr-1">$^§sldr-2">$^§sldr-4">$^§curl">$^§curr">$$^§opacity">|^§opacity-slider">$$$^§memo">^§raster">$^§raster-bg">$|$|$|$|$|$|$|$|$^§memo-store">$^§memo-cursor">$$^§panel">^§hsv">^hsl-mode §ß">$^hsv-h-ß §ß">H$^hsv-h-~ §~">-^§nsarrow">$$^hsl-h-@ §@">H$^hsv-s-ß §ß">S$^hsv-s-~ §~">-$^hsl-s-@ §@">S$^hsv-v-ß §ß">B$^hsv-v-~ §~">-$^hsl-l-@ §@">L$$^§hsl §hide">^hsv-mode §ß">$^hsl-h-ß §ß">H$^hsl-h-~ §~">-$^hsv-h-@ §@">H$^hsl-s-ß §ß">S$^hsl-s-~ §~">-$^hsv-s-@ §@">S$^hsl-l-ß §ß">L$^hsl-l-~ §~">-$^hsv-v-@ §@">B$$^§rgb">^rgb-r-ß §ß">R$^rgb-r-~ §~">-$^rgb-r-@ §ß">&nbsp;$^rgb-g-ß §ß">G$^rgb-g-~ §~">-$^rgb-g-@ §ß">&nbsp;$^rgb-b-ß §ß">B$^rgb-b-~ §~">-$^rgb-b-@ §ß">&nbsp;$$^§cmyk">^Lab-mode §ß">$^cmyk-c-ß §@">C$^cmyk-c-~ §~">-$^Lab-L-@ §@">L$^cmyk-m-ß §@">M$^cmyk-m-~ §~">-$^Lab-a-@ §@">a$^cmyk-y-ß §@">Y$^cmyk-y-~ §~">-$^Lab-b-@ §@">b$^cmyk-k-ß §@">K$^cmyk-k-~ §~">-$^Lab-x-@ §ß">&nbsp;$$^§Lab §hide">^cmyk-mode §ß">$^Lab-L-ß §@">L$^Lab-L-~ §~">-$^cmyk-c-@ §@">C$^Lab-a-ß §@">a$^Lab-a-~ §~">-$^cmyk-m-@ §@">M$^Lab-b-ß §@">b$^Lab-b-~ §~">-$^cmyk-y-@ §@">Y$^Lab-x-ß §@">&nbsp;$^Lab-x-~ §~">-$^cmyk-k-@ §@">K$$^§alpha">^alpha-ß §ß">A$^alpha-~ §~">-$^alpha-@ §ß">W$$^§HEX">^HEX-ß §ß">#$^HEX-~ §~">-$^HEX-@ §ß">M$$^§ctrl">^§raster">$^§cont">$^§cold">$^§col1">|&nbsp;$$^§col2">|&nbsp;$$^§bres">RESET$^§bsav">SAVE$$$^§exit">$^§resize">$^§resizer">|$$$').
			replace(/\^/g, '<div class="').replace(/\$/g, '</div>').replace(/~/g, 'disp').replace(/ß/g, 'butt').replace(/@/g, 'labl').replace(/\|/g, '<div>'),
		_cssFunc = ('är^1,äg^1,äb^1,öh^1,öh?1,öh?2,ös?1,öv?1,üh^1,üh?1,üh?2,üs?1,ül?1,.no-rgb-r är?2,.no-rgb-r är?3,.no-rgb-r är?4,.no-rgb-g äg?2,.no-rgb-g äg?3,.no-rgb-g äg?4,.no-rgb-b äb?2,.no-rgb-b äb?3,.no-rgb-b äb?4{visibility:hidden}är^2,är^3,äg^2,äg^3,äb^2,äb^3{@-image:url(_patches.png)}.§slds div{@-image:url(_vertical.png)}öh^2,ös^1,öv^1,üh^2,üs^1,ül^1{@-image:url(_horizontal.png)}ös?4,öv^3,üs?4,ül^3{@:#000}üs?3,ül^4{@:#fff}är?1{@-color:#f00}äg?1{@-color:#0f0}äb?1{@-color:#00f}är^2{@|-1664px 0}är^3{@|-896px 0}är?1,äg?1,äb?1,öh^3,ös^2,öv?2Ü-2432Öär?2Ü-2944Öär?3Ü-4480Öär?4Ü-3202Öäg^2Äöh^2{@|-640px 0}äg^3{@|-384px 0}äg?2Ü-4736Öäg?3Ü-3968Öäg?4Ü-3712Öäb^2{@|-1152px 0}äb^3{@|-1408px 0}äb?2Ü-3456Öäb?3Ü-4224Öäb?4Ü-2688Ööh^2Äär^3Ääb?4Ü0}öh?4,üh?4Ü-1664Öös^1,öv^1,üs^1,ül^1Ääg^3{@|-256px 0}ös^3,öv?4,üs^3,ül?4Ü-2176Öös?2,öv^2Ü-1920Öüh^2{@|-768px 0}üh^3,üs^2,ül?2Ü-5184Öüs?2,ül^2Ü-5824Ö.S är^2{@|-128px -128Ö.S är?1Ääg?1Ääb?1Äöh^3Äös^2Äöv?2Ü-1408Ö.S är?2Ääb^3Ü-128Ö.S är?3Ü-896Ö.S är?4Ü-256Ö.S äg^2{@|-256px -128Ö.S äg?2Ü-1024Ö.S äg?3Ü-640Ö.S äg?4Ü-512Ö.S äb^2{@|-128px 0}.S äb?2Ü-384Ö.S äb?3Ü-768Ö.S öh?4Äüh?4Ü-1536Ö.S ös^1Äöv^1Äüs^1Äül^1{@|-512px 0}.S ös^3Äöv?4Äüs^3Äül?4Ü-1280Ö.S ös?2Äöv^2Ü-1152Ö.S üh^2{@|-1024px 0}.S üh^3Äüs^2Äül?2Ü-5440Ö.S üs?2Äül^2Ü-5696Ö.XXS ös^2,.XXS öv?2Ü-5120Ö.XXS ös^3,.XXS öv?4,.XXS üs^3,.XXS ül^3,.XXS ül?4Ü-5056Ö.XXS ös?2,.XXS öv^2Ü-4992Ö.XXS üs^2,.XXS ül?2Ü-5568Ö.XXS üs?2,.XXS ül^2Ü-5632Ö').
			replace(/Ü/g, '{@|0 ').replace(/Ö/g, 'px}').replace(/Ä/g, ',.S ').replace(/\|/g, '-position:').replace(/@/g, 'background').replace(/ü/g, '.hsl-').replace(/ö/g, '.hsv-').replace(/ä/g, '.rgb-').replace(/~/g, ' .no-rgb-}').replace(/\?/g, ' .§sldr-').replace(/\^/g, ' .§sldl-'),
		_horizontalPng = 'iVBORw0KGgoAAAANSUhEUgAABIAAAAABCAYAAACmC9U0AAABT0lEQVR4Xu2S3Y6CMBCFhyqIsjGBO1/B9/F5DC/pK3DHhVkUgc7Zqus2DVlGU/cnQZKTjznttNPJBABA149HyRf1iN//4mIBCg0jV4In+j9xJiuihly1V/Z9X88v//kNeDXVvyO/lK+IPR76B019+1Riab3H1zkmeqerKnL+Bzwxx6PAgZxaSQU8vB62T28pxcQeRQ2sHw6GxCOWHvP78zwHAARBABOfdYtd30rwxXOEPDF+dj2+91r6vV/id3k+/brrXmaGUkqKhX3i+ffSt16HQ/dorTGZTHrs7ev7Tl7XdZhOpzc651nfsm1bRFF0YRiGaJoGs9nsQuN/xafTCXEco65rzOdzHI9HJEmCqqqwXC6x3++RZRnKssRqtUJRFFiv19jtdthutyAi5Hl+Jo9VZg7+7f3yXuvZf5c3KaXYzByb+WIzO5ymKW82G/0BNcFhO/tOuuMAAAAASUVORK5CYII=',
		_verticalPng = 'iVBORw0KGgoAAAANSUhEUgAAAAEAABfACAYAAABn2KvYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABHtJREFUeNrtnN9SqzAQxpOF1to6zuiVvoI+j6/gva/lA/kKeqUzjtX+QTi7SzSYBg49xdIzfL34+e1usoQQklCnmLwoCjImNwDQA2xRGMqNAYB+gPEH9IdCgIUA6Aem0P1fLoMQAPYNHYDoCKAv8OMHFgKgX2AjDPQDXn4t1l+gt/1fId//yWgE/hUJ+mAn8EyY5wCwXxhrbaHzn8E9iPlv79DdHxXTqciZ4KROnXRVZMF/6U2OPhcEavtAbZH1SM7wRDD7VoHZItCiyEQf4t6+MW9UOxaZybmdCGKqNrB9Eb5SfMg3wTyiagMtigTmWofiSDCOYNTSNz6sLDIoaCU9GWDd0tdhoMMsRm+r8U/EfB0GfjmLXiqzimDd0tdhoLMsI7la45+I+ToM/HIW0kfGVQTrlr7tA91kaUr//fxrKo8jUFB7VAn6AKpHJf+EKwAAAIYD/f7F7/8MVgMo7P+gBqDKr57Lf72V8x8AAMDgYIuvH4EAAAAMDQX6AACAQcI9GGMjDADA4MA/P2KlP8IEAAAYFCz6AACAgaLA8y8AAIN+CMYXoQAADA7u/UPYCAMAMDjI7z9S+SdwDFQX2C9Gh9GMEOWriz8/Pw1lWQZsi/L3R4czzP678Ve+P8f9nCv/C7hwLq99ah8NfKrU15zPB5pVcwtiJt9qGy0IfEE+jQa+Fn0VtI/fkxUPqBlEfRENeF+tqUpbGpi1iu8epwJzvV5XA4GpWC6XGz7F+/u766EgwJ+ckiTJKU3TnI6OjnI6OzvLZf6zMggt3dzckPhIoiTlSGpQ+eEsVegdz0fbCCi4fRs+Po+4yWdeDXiT+6pBSTeHple1pkz3FZ+avpyavoiPxgLN0B7yprY08PlyQTTm0+PWmkH7ynedNKraar4F/lRj1WpTtYh+ozL/cY2sAvZl0gcbZm0gSLBLvkxGoaogiy/HDXemQk2t5pUm8OAhH8/HH6e0mkJ9q9XKKQXfb07xfZnJbZrRxcVFVt6/t7e3Kc1ms5RGo1Eq5VIZuyl9fHw4k/M5xYeoKj64A7eqCt1ZeqWFVSl8NV9OTV3fmvP5qE9VmzSoEcsXpArK1UHen/hZbgL53BZSdyEXalGau/hU8TEW0u3VcoFPy3EDFrTgT+njydeZ0+l0UV7fu7u7iVzziQQmUm4iqRw4n/NxMxw4s/Mp1NSALxf4NEtQ10cjMDwSl+b+/j6hp6enVGb+jUvrn05iKobm6PboOt8vPISY5Pr6OqGXlxe3fOokoGtAbMUJZmqvYmaLQDP+sdrecOjtO/SXeH69P8Imutm5urqy9PDwYOny8tLS4+OjpfPzc0vPz8+WTk9PLb2+vlpZbCzN53NLx8fHVtYZS5PJxMoEZWWqsjKULY3HYytTi1Pex5OMldXKRVXxuLcy/20onmms3BBOxcr5qCrZtsrd45SPel8sGlOxGoGy0neynQ6VL9fsa1YtWlCrtj9G83G7PjdVush5n5q1iJWLZW6u21a1bUvbVnVzlru0pe3RdmlV1/23fZtbZv4Dx+7FBypx77kAAAAASUVORK5CYII=',
		_patchesPng = ('iVBORw0KGgo^NSUhEUgAAB4^EACAI#DdoPxz#L0UlEQVR4Xu3cQWrDQBREwR7FF8/BPR3wXktnQL+KvxfypuEhvLJXcp06d/bXd71OPt+trIw95zr33Z1bk1/fudEv79wa++7OfayZ59wrO2PBzklcGQmAZggAAOBYgAYBmpWRAGg^BGgRofAENgAAN#I0CBA6w8AG^ECABgEa/QH§AI0CNDoDwAY^QIAGAVp/AM§AjQI0OgPAAY^QoEGARn8Aw§CNAjQ+gMABg#BCgQYCmGQmABgAAEKBBgEZ/AM§AjQI0PoDAAY^QoEGARn8AM^IAADQI0+gMABg#BCgQYDWHwAw^gAANAjT6A4AB^BGgQoNEfAD^C#0CtP4AgAE^EaBCgaUYCoAE#RoEKDRHwAw^gAANArT+AIAB^BGgQoNEfAAw^gQIMAjf4AgAE^EaBCg9QcAD^CBAgwCN/gBg§EaBGj0BwAM^IECDAK0/AG§ARoEaJqRAGg^BGgRo9AcAD^CBAgwCtPwBg§EaBGj0BwAD^CNAgQKM/AG§ARoEaP0BAAM^I0CBAoz8AG^ECABgEa/QEAAw^jQIEDrDwAY^QIAGAZpmJACaBw^RoEKD1BwAM^IECDAK0/AG§ARoEaPQHAAw^gQIMArT8AY§BGgRo/QEAAw^jQIECjPwBg§EaBGj9AQAD^CNAgQOsPABg#BAgAYBGv0BAANwCwAAGB6gYeckmpEAa^AEaBGj0BwAM^IECDAK0/AG§ARoEaPQHAAM^I0CBAoz8AY§BGgRo/QEAAw^jQIECjPwAY^QIAGARr9AQAD^CNAgQOsPABg#BAgAYBmmYkABoAAECABgEa/QEAAw^jQIEDrDwAY^QIAGARr9Ac§AjQI0OgPABg#BAgAYBWn8Aw§CNAjQ6A8ABg#BCgQYBGfwD§AI0CND6AwAG^EKBBgKYZCYAG#QoEGARn8Aw§CNAjQ+gMABg#BCgQYBGfwAw^gAANAjT6AwAG^EKBBgNYfAD^C#0CNPoDgAE^EaBCg0R8AM^IAADQK0/gCAAQ^RoEKBpRgKgAQAABGgQoNEfAD^C#0CtP4AgAE^EaBCg0R8AD^CBAgwCN/gCAAQ^RoEKD1BwAM^IECDAI3+AG§ARoEaPQHAAw^gQIMArT8AY§BGgRomsMAM^IAADQK0/gCAAQ^RoEKDRHwAw^gAANO7fQHwAw^gAANArT+AIAB^BGgQoNEfAGg^BGgRo9AcAD^CBAgwCtPwBg§EaBGj0BwAD^RIB+Ntg5iea5AD^DAIwI0CND6AwAG^EKBBgEZ/AKAB#EaBCg0R8AM^IAADQK0/gCAAQ^RoEKDRHwAM^IECDAI3+AIAB^BGgQoPUHAAw^gQIMAjf4AY§BGgRo9AcAD^CBAgwCtPwBg§EaBGiakQBo^ARoEaPQHAAw^gQIMArT8AY§BGgRo9AcAAw^jQIECjPwBg§EaBGj9AQAD^CNAgQKM/ABg#BAgAYBGv0BAAM^I0CBA6w8AG^ECABgGaZiQAGgAAQIAGARr9AQAD^CNAgQOsPABg#BAgAYBGv0Bw§CNAjQ6A8AG^ECABgFafwD§AI0CNDoDwAG^EKBBgEZ/AM§AjQI0PoDAAY^QoEGApjkMAAM^I0CBA6w8AG^ECABgEa/QEAAw^jQsIP+AIAB^BGgQoPUHAAw^gQIMAjf4AgAE#Bea/fK+3P5/3PJOvh8t1cO4nflmQAQoAEAAF9Aw/7JHfQHAAw^gQIMArT8AY§BGvwHNPoDAA0AACBAgwCN/gCAAQ^RoEKD1BwAM^IECDAI3+AG§ARoEaPQHAAw^gQIMArT8AY§BGgRo9AcAAw^jQIECjPwBg§EaBGj9AQAD^CNAgQNOMBEAD#I0CBAoz8AY§BGgRo/QEAAw^jQIECjPwAY^QIAGARr9AQAD^CNAgQOsPABg#BAgAYBGv0Bw§CNAjQ6A8AG^ECABgFafwD§AI0CNA0IwHQ^AjQI0OgPABg#BAgAYBWn8Aw§CNAjQ6A8ABg#BCgQYBGfwD§AI0CND6AwAG^EKBBgEZ/AD^C#0CNPoDAAY^QoEGA1h8AM^IAADQI0DQAG^EKBBgEZ/AM§AjQI0PoDAAY^QoEGA1h8AM^IAADQI0+gMABg#BCgQYDWHwAw^gAANArT+AIAB^BGgQoNEfAD^C#0CtP4AgAE^EaBCg9QcAD^CBAgwCN/gCAAQ^RoEKD1BwAM^IECDAK0/AG§ARoEaPQHAAw^gQIMArT8AY§BGgRo/QEAAw^jQIECjPwBgACDhFgC#07t9AfAD^C#0CtP4AgAE^EaBCg0R8Aa^AEaBGj0BwAM^IECDAK0/AG§ARoEaPQHAAM^I0CBAoz8AY§BGgRo/QEAAw^jQIECjPwAY^QIAGARr9AQAD^CNAgQOsPABg#BAgAYBmmYkABoAAECABgEa/QEAAw^jQIEDrDwAY^QIAGARr9Ac§AjQI0OgPABg#BAgAYBWn8Aw§CNAjQ6A8ABg#BCgQYBGfwD§AI0CND6AwAG^EKBBgKYZCYAG#QoEGARn8Aw§CNAjQ+gMABg#BCgQYBGfwAw^gAANAjT6AwAG^EKBBgNYfAD^C#0CNPoDgAE^EaBCg0R8AM^IAADQK0/gCAAQ^RoEKBpRgKgAQAABGgQoNEfAD^C#0CtP4AgAE^EaBCg0R8AD^CBAgwCN/gCAAQ^RoEKD1BwAM^IECDAI3+AG§ARoEaPQHAAw^gQIMArT8AY§BGgRommEAM^CBAgwCN/gCAAQ^RoEKD1BwAM^IECDAI3+AIAB^ARoEaPQHAAw^gQIMArT8AY§BGgRo9AcAGgAAQICGCNBfRfNcABg#BgeICGnVvoDwAY^QIAGAVp/AM§AjQI0OgPADQAAIAADQI0+gMABg#BCgQYDWHwAw^gAANAjT6A4AB^BGgQoNEfAD^C#0CtP4AgAE^EaBCg0R8AD^CBAgwCN/gCAAQ^RoEKD1BwAM^IECDAE0zEgAN#gQIMAjf4AgAE^EaBCg9QcAD^CBAgwCN/gBg§EaBGj0BwAM^IECDAK0/AG§ARoEaPQHAAM^I0CBAoz8AY§BGgRo/QEAAw^jQIEDTjARAAwAACNAgQKM/AG§ARoEaP0BAAM^I0CBAoz8AG^ECABgEa/QEAAw^jQIEDrDwAY^QIAGARr9Ac§AjQI0OgPABg#BAgAYBWn8Aw§CNAjQNIcBY§BGgRo/QEAAw^jQIECjPwBg§EadtAfAD^C#0CtP4AgAE^EaBCgAQABGgAA+AO2TAbHupOgH^ABJRU5ErkJggg==').
			replace(/§/g, 'AAAAAA').replace(/\^/g, 'AAAA').replace(/#/g, 'AAA'),
		_iconsPng = 'iVBORw0KGgoAAAANSUhEUgAAAGEAAABDCAMAAAC7vJusAAAAkFBMVEUAAAAvLy9ERERubm7///8AAAD///9EREREREREREREREQAAAD///8AAAD///8AAAD///8AAAD///8AAAD///8AAAD///8AAAD///8AAAD///8AAAD///8cHBwkJCQnJycoKCgpKSkqKiouLi4vLy8/Pz9AQEBCQkJDQ0NdXV1ubm58fHykpKRERERVVVUzMzPx7Ab+AAAAHXRSTlMAAAAAAAQEBQ4QGR4eIyMtLUVFVVVqapKSnJy7u9JKTggAAAFUSURBVHja7dXbUoMwEAbgSICqLYeW88F6KIogqe//dpoYZ0W4AXbv8g9TwkxmvtndZMrEwlw/F8YIRjCCEYxgBCOsFmzqGMEI28J5zzmt0Pc9rdDL0NYgMxIYC5KiKpKAzZphWtZlGm4SjlnkOV6UHeeEUx77rh/npw1dCrI9k9lnwUwF+UG9D3m4ftJJxH4SJdPtaawXcbr+tBaeFrxiur309cIv19+4ytGCU0031a5euPVigLYGqjlAqM4ShOQ+QAYQUO80AMMAAkUGGfMfR9Ul+kmvPq2QGxXKOQBAKdjUgk0t2NiCGEVP+rHT3/iCUMBT90YrPMsKsIWP3x/VolaonJEETchHCS8AYAmaUICQQwaAQnjoXgHAES7jLkEFaHO4bdq/k25HAIpgWY34FwAE5xjCffM+D2DV8B0gRsAZT7hr5gE8wdrJcU+CJqhcqQD7Cx5L7Ph4WnrKAAAAAElFTkSuQmCC',
		_bgsPng = 'iVBORw0KGgoAAAANSUhEUgAAASAAAABvCAYAAABM+h2NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABORJREFUeNrs3VtTW1UYBuCEcxAI4YydWqTWdqr1V7T/2QsvvPDCCy9qjxZbamsrhZIQUHsCEtfafpmJe8qFjpUxfZ4Zuvt2feydJvAOARZUut1u5bRerl692nV913f99/f6QxWAU6KAAAUEKCAABQQoIAAFBCggAAUEKCAABQQoIAAFBCggAAUEKCAABQQoIEABASggQAEBKCBAAQEoIEABASggQAEBKCBAAQEoIGBQC+jatWvd07zxrv9+Xx8fAQEoIEABASggQAEBKCBAAQEoIEABAQoIQAEBCghAAQEKCEABAQOk2u36kS6AAgLetwJKL29toFRM1be+QrVq3rx58//KvM8BAadGAQEKCFBAAAoIGHwnfhneZ+/Nmzf/LufzrI+AAE/BAAUEoIAABQTwztgLZt68eXvBAE/BABQQoIAAFBAweOwFM2/evL1ggKdgAAoIUEAACggYPPaCmTdv3l4wwFMwAAUEKCAABQQMHnvBzJs3by8Y4CkYgAICFBCAAgIGz4lfBQNQQMDgFlCtVisaaHV1tThubW1VInciD0U+ysdnz54N5+PKysphOnRTHsvHlN9EHo/1l5FrkV9Enoz8W87b29tTOS8vLx9EnoncjlyPvBe5EbkZeT4fU96NvBDr2znv7Ows57y0tLQVeSXy08gf5mNfPhPrjyOfrVarlcXFxZ9yfv78+bl8TPlh5LU8n/KDyOuxfj/y+VjfyHl3d/dCKv28fi/yp/m4sLDwQ+SLke9GvhT5Tinfjnw5f4/F/Pz8rZybzeZn+ZjyzVK+EfnzUr4S+Xopf9/L+fxzc3M5d1qt1hf531Mu5k/IxzGf85VYL+fefHH+RqNRrO/t7RW3L+UbkS9Hvhk5/386Kd/qW8/5duRLMV/OdyJfzNebnZ0t7t92u53v/07K9yJfiLwROT9+ef7HyOux/iDyWuSHkT+K+eLtZX9//2xer9frjyOfyY9/Wn8S86v59qT1p7Ge315zLt4RU16K19+O9YXIu5HnYn435hux3opcj9yOPB3z+5E/iPXf43y1yMX778HBQS3f3pTz+28l5bHIr2N+LN3+zszMzGHkoh/S+mHMF98XlNaP8zHd/0W/pMe943NAwKlSQIACAhQQgAICFBCAAgIUEIACAhQQgAIC/n9GqtXqYbfbHa38+RtSu32llPdqdNL6aOSj+LfxyMVekLTem39Ryr/mPDQ0NBznzXtROikPRW6W8k7k3m9rzXthOsPDw73bUuylGRkZ6cR63nvTSfko8oPIr+Pnz96P/DLW816ezujoaN6DdtyX9+P8eS9QZ2xs7Hxf7qa8Xlr/JO6Ljcjrcf6cj1P+OO+N6V1/fHz8XLz+/Tjfubh+sZcorZ+N9Ycxfybyo8ircf6fc56YmFiJ1/8l8mLk7cjzkfP92U15Ns63G+u9nPcKdWq12lQ8Xu3Ixd6f9Pd8P3UmJycnUszzL2N9LM7/anNzs9V7Q2q32395w/q7ubdH6L/KrVbrpPxlKX9Vyl+X8jel/G0pf5f/aDabvXy9tH6ztH63lDdKebOUH5Xyk1LeKuWd/ry2tlap9P125Onp6Zf9eWpq6lW3b8f6zMzM6/71er3+ppSP+u/XNN/pz41Go+sjIMBTMEABASggQAEBKCBAAQEoIEABASggQAEB/CN/CDAAw78uW9AVDw4AAAAASUVORK5CYII=';

		window.ColorPicker = {
			_html: _html,
			_cssFunc: _cssFunc,
			_cssMain: pepito,
			_horizontalPng: _horizontalPng,
			_verticalPng: _verticalPng,
			_patchesPng: _patchesPng,
			_iconsPng: _iconsPng,
			_bgsPng: _bgsPng
		}
})(window);