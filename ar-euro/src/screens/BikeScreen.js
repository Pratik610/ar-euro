import React, { useState, useEffect } from 'react'
import '../bike.css'
import logo from '../images/whitepng.png'
import loading from '../images/loading-1.gif'

const BikeScreen = () => {
	const [collapse, setCollapse] = useState(true)
	const [collapseMobile, setCollapseMobile] = useState(false)
	const [category, setCategory] = useState('all')

	const [bike, setBike] = useState(0)
	const allBikes = [
		// Mountain Bikes
		{
			name: 'T-Rex',
			code: 'M006',
			category: 'mtb',
			model: 'https://ar-euro.s3.ap-south-1.amazonaws.com/GLTF_M030/M030.gltf',
			background: './images/bg-xplorer.png',
			poster: './images/exp1.png',
			// bgColor:"linear-gradient(90deg, rgba(124,173,231,1) 0%, rgba(91,171,226,1) 39%, rgba(0,57,145,1) 87%);",
			specs: {
				frame: '6061 aluminium alloy',
				frontFork: 'Suspension Front Fork ',
				rearShork: '',
				brake: 'F+R disc brake',
				display: 'LCD display',
				battery: '48V 10Ah',
				motor: 'Rear motor 48V 500W',
				gear: 'Shimano 7 speed',
				tire: '27.5*2.1',
			},
		},
		{
			name: 'Fireblade',
			code: 'M011',
			category: 'mtb',
			model: 'https://ar-euro.s3.ap-south-1.amazonaws.com/spain-models/m011/M011.gltf',
			background: './images/bg-xplorer.png',
			poster: './images/exp1.png',
			specs: {
				frame: '6061 aluminium alloy',
				frontFork: 'Hydraulic Oil front fork',
				rearShork: '',
				brake: 'Tektro Hydraulic Oil F+R disc brake',
				display: 'LCD display',
				battery: '36V 10.4Ah',
				motor: 'Rear motor 36V 250W',
				gear: 'Shimano 7 speed',
				tire: 'CST 26*4.0',
			},
		},
		{
			name: 'Crusader',
			code: 'M030',
			category: 'mtb',
			model: 'https://ar-euro.s3.ap-south-1.amazonaws.com/spain-models/m030/M030.gltf',
			background: './images/bg-xplorer.png',
			poster: './posters/CRUSADER M030.png',
			bgColor:"background: rgb(124,173,231);background: linear-gradient(90deg, rgba(124,173,231,1) 0%, rgba(91,171,226,1) 39%, rgba(0,57,145,1) 87%);",
			specs: {
				frame: '6061 aluminium alloy',
				frontFork: 'Hydraulic Oil Supension Front Fork with lock',
				rearShork: '',
				brake: 'Tektro mechanical F+R disc brake',
				display: 'LCD display',
				battery: '48V 12.8Ah',
				motor: 'Bafang rear motor  48V 250W',
				gear: 'Shimano 7 speed',
				tire: 'CST 26*4.0',
			},
		},
		{
			name: 'Trip E',
			code: 'M037',
			category: 'mtb',
			model:
				'https://ar-euro.s3.ap-south-1.amazonaws.com/spain-models/M037_02/M037-02.gltf',
			background: './images/bg-xplorer.png',
			poster: './posters/TREIP E M037.png',
			specs: {
				frame: '6061 aluminium alloy',
				frontFork: 'Oil Suspension Front Fork with lock',
				rearShork: '',
				brake: 'Tektro Mechanical F+R disc Brake',
				display: 'LCD display',
				battery: 'LG 48V 13Ah',
				motor: 'Bafang rear motor  36V/48V 250W/500W',
				gear: 'Shimano 7 speed',
				tire: 'CST tire 27.5*2.4 inch',
			},
		},
		{
			name: 'ROME',
			code: 'M041',
			category: 'mtb',
			model: 'https://ar-euro.s3.ap-south-1.amazonaws.com/spain-models/m041/M041.gltf',
			background: './images/bg-xplorer.png',
			poster: './posters/ROME M041.png',
			specs: {
				frame: '6061 aluminium alloy flat wielding',
				frontFork: 'Hydraulic oil Suspension Front Fork with lock',
				rearShork: 'KS-A5 Hydraulic oil rear shork  ',
				brake: 'Tektro Hydraulic Oil F+R disc Brake',
				display: 'Bafang LCD display',
				battery: '48V 19.5 Ah(With usb port)，quick release',
				motor: 'Bafang middle motor 48V 500W',
				gear: 'Shimano 8 speed',
				tire: 'Kenda 27.5*2.35inch',
			},
		},
		{
			name: 'EMX',
			code: 'M042',
			category: 'mtb',
			model: 'https://ar-euro.s3.ap-south-1.amazonaws.com/spain-models/emx/EMX.gltf',
			background: './images/bg-xplorer.png',
			poster: './posters/EMX M042.png',
			specs: {
				frame: '6061 aluminium alloy',
				frontFork: 'Oil Suspension Front Fork with lock',
				rearShork: 'Mechanical Rear shork',
				brake: ' F+R disc brakes',
				display: 'LCD display',
				battery: '36V 10.4Ah',
				motor: 'Bafang rear motor  36V 250W',
				gear: 'Shimano 21 speed',
				tire: 'CST 27.5*2.1',
			},
		},
		{
			name: 'T-REX Pro',
			code: 'M047',
			category: 'mtb',
			model: 'https://ar-euro.s3.ap-south-1.amazonaws.com/spain-models/m047/M047.gltf',
			background: './posters/T-REX PRO M047.png',
			poster: './images/exp1.png',
			specs: {
				frame: '6061 aluminium alloy',
				frontFork: 'Suspension front fork with lock',
				rearShork: '',
				brake: ' F+R disc brakes',
				display: 'LCD display',
				battery: '36V 10Ah',
				motor: 'Rear motor 36V 350W',
				gear: 'Shimano 7 speed',
				tire: 'CST 26*4.0',
			},
		},
		{
			name: 'Lucia',
			code: 'M051',
			category: 'mtb',
			model: 'https://ar-euro.s3.ap-south-1.amazonaws.com/spain-models/M051/m051.gltf',
			background: './images/bg-xplorer.png',
			poster: './posters/Lucia-M051.png',
			specs: {
				frame: 'Carbon fiber',
				frontFork: 'Hydraulic,adjustent to locked,SRAMs',
				rearShork: 'KS adjustable Rear oil shork',
				brake: 'Hydraulic Disc-brake Tektro M290',
				display: 'LCD display',
				battery: 'Lithium battery 48V 16Ah',
				motor: 'Middle  motor 48V 250W/500W',
				gear: 'Shimano Acera 8 speed',
				tire: 'Kenda 27.5*2.35',
			},
		},
		{
			name: 'Dune',
			code: 'M052',
			category: 'mtb',
			model: 'https://ar-euro.s3.ap-south-1.amazonaws.com/spain-models/m052/M052.gltf',
			background: './images/bg-xplorer.png',
			poster: './images/exp1.png',
			specs: {
				frame: '6061 aluminium alloy',
				frontFork: 'Suspension front fork with lock',
				rearShork: '',
				brake: 'F+R disc brake ',
				display: 'LCD display',
				battery: '48V 10.4Ah',
				motor: 'Rear Motor 48V 250W',
				gear: 'Shimano 21 speed',
				tire: 'CST 27.5*2.1',
			},
		},

		{
			name: 'Spark',
			code: 'M053',
			category: 'mtb',
			model: 'https://ar-euro.s3.ap-south-1.amazonaws.com/spain-models/M053/m053.gltf',
			background: './images/bg-xplorer.png',
			poster: './posters/SPARK M053.png',
			specs: {
				frame: '6061 aluminium alloy',
				frontFork: 'Hydraulic Oil Suspension Front Fork with lock',
				rearShork: '',
				brake: 'Tektro hydraulic oil F+R disc brakes',
				display: 'LCD display',
				battery: '48V 10.4Ah',
				motor: 'Middle motor 36V 250W',
				gear: 'Shimano 9 speed',
				tire: '27.5*2.251 inches',
			},
		},
		{
			name: 'Capella',
			code: 'M054',
			category: 'mtb',
			model: './Japan/XPL.gltf',
			background: './images/bg-xplorer.png',
			poster: './images/exp1.png',
			specs: {
				frame: '6061 aluminium alloy',
				frontFork: 'Hydraulic Oil Supension Front Fork with lock',
				rearShork: '',
				brake: 'Tektro mechanical F+R disc brake',
				display: 'LCD display',
				battery: '48V 10.4Ah',
				motor: 'Middle motor 36V 350W',
				gear: 'Shimano 9 speed',
				tire: 'CST 27.5*3.0inches',
			},
		},
		{
			name: 'Tailwind',
			code: 'M055',
			category: 'mtb',
			model: './Japan/XPL.gltf',
			background: './images/bg-xplorer.png',
			poster: './images/exp1.png',
			specs: {
				frame: '6061 aluminium alloy',
				frontFork: 'Hydraulic Oil Supension Front Fork with lock',
				rearShork: '',
				brake: 'Tektro hydraulic oil F+R disc brakes',
				display: 'LCD display',
				battery: '36V 10.4Ah',
				motor: 'Rear motor 36V 250W',
				gear: 'Shimano 7 speed',
				tire: 'CST 27.5*3.0inches',
			},
		},

		{
			name: 'Athena',
			code: 'M057',
			category: 'mtb',
			model: 'https://ar-euro.s3.ap-south-1.amazonaws.com/spain-models/M057/m057.gltf',
			background: '',
			poster: './posters/ATHENA M057.png',
			specs: {
				frame: '6061 aluminium alloy flat wielding',
				frontFork: 'SRAM Air,adjustment to locked',
				rearShork: 'SRAM Air-hydraulic  adjustment',
				brake: 'Tektro Hydraulic Oil F+R disc Brake  ',
				display: 'Bafang Color screen ,with USB port',
				battery: 'LG 48V 17.5Ah(With USB port)，quick release',
				motor: 'Bafang Middle Motor 48V 350W',
				gear: 'SRAM 9 speed ',
				tire: 'CST MAXXIS tire front 29*2.5"，rear 29*2.4',
			},
		},

		{
			name: 'Phoenix',
			code: 'M058',
			category: 'mtb',
			model: 'https://ar-euro.s3.ap-south-1.amazonaws.com/spain-models/M058/M058.gltf',
			background: './images/bg-xplorer.png',
			poster: './posters/PHEONIX M058.png',
			specs: {
				frame: '6061 aluminium alloy flat wielding',
				frontFork: 'SRAM Air,adjustment to locked',
				rearShork: 'SRAM Air-hydraulic  adjustment',
				brake: 'Tektro Hydraulic Oil F+R disc Brake ',
				display: 'Bafang Color screen ,with USB port',
				battery: 'LG 48V 17.5Ah with USB port，quick release',
				motor: 'Bafang Middle Motor 48V 350W',
				gear: 'SRAM 9 speed ',
				tire: 'Kenda tire 26*4.0inch,puncture-proof with reflector ',
			},
		},

		// CITY Bikes

		{
			name: 'Coco',
			code: 'C003',
			category: 'city',
			model: './Japan/XPL.gltf',
			background: './images/bg-xplorer.png',
			poster: './images/exp1.png',
			specs: {
				frame: '6061 aluminium alloy',
				frontFork: 'Steel front fork',
				brake: 'F+R disc brake',
				display: 'LCD  display',
				battery: '36V 10.4Ah',
				motor: 'Rear motor  36V 250W',
				gear: 'Shimano 7 speed',
				tire: 'CST 26*1.75',
			},
		},

		{
			name: 'Eighty Six',
			code: 'C010',
			category: 'city',
			model: './Japan/XPL.gltf',
			background: './images/bg-xplorer.png',
			poster: './images/exp1.png',
			specs: {
				frame: '6061 aluminium alloy',
				frontFork: 'Hydraulic Oil Suspension Front Fork with lock',
				brake: 'Tektro mechanical F+R  disc brake',
				display: 'LCD  display',
				battery: '36V 15Ah',
				motor: 'Bafang rear motor  36V 250W',
				gear: 'Shimano 7 speed',
				tire: 'CST 700*38C',
			},
		},

		{
			name: 'Viper',
			code: 'C037',
			category: 'city',
			model: 'https://ar-euro.s3.ap-south-1.amazonaws.com/spain-models/C037/c037.gltf',
			background: './images/bg-xplorer.png',
			poster: './posters/VIPER C037.png',
			specs: {
				frame: '6061 aluminium alloy',
				frontFork: 'Suspension front fork',
				brake: 'F+R mechanical disc brake',
				display: 'LCD  display',
				battery: '36V 10.4Ah',
				motor: 'Rear motor  36V 250W',
				gear: 'Shimano 7 speed',
				tire: 'CST 700c x 38c',
			},
		},
		{
			name: 'Sydney',
			code: 'C038',
			category: 'city',
			model: 'https://ar-euro.s3.ap-south-1.amazonaws.com/spain-models/c038/C038.gltf',
			background: './images/bg-xplorer.png',
			poster: './posters/SYDNEY C038.png',
			specs: {
				frame: '6061 aluminium alloy',
				frontFork: 'Suspension front fork',
				brake: 'F+R mechanical disc brake',
				display: 'LCD  display',
				battery: '36V 10.4Ah',
				motor: 'Rear motor  36V 250W',
				gear: 'Shimano 7 speed',
				tire: 'CST 700C*38C',
			},
		},

		{
			name: 'Dove',
			code: 'C041',
			category: 'city',
			model: 'https://ar-euro.s3.ap-south-1.amazonaws.com/spain-models/c041/C041.gltf',
			background: './images/bg-xplorer.png',
			poster: './posters/DOVE C041.png',
			specs: {
				frame: 'Carbon fiber',
				frontFork: 'SR Suntour Magnesium alloy ,front suspension',
				brake: 'Tektro Hydraulic F+R disc brake,',
				display: '5 lever Color LCD display  APT  860C',
				battery: 'LG 36V 9.6Ah ,quick release with USB ',
				motor: 'Bafang rear motor 36V 250W  ',
				gear: 'Shimano 7 speed',
				tire: 'Kenda 700C*45C',
			},
		},

		{
			name: 'Simba',
			code: 'C042',
			category: 'city',
			model: 'https://ar-euro.s3.ap-south-1.amazonaws.com/spain-models/c042/C042.gltf',
			background: './images/bg-xplorer.png',
			poster: './images/exp1.png',
			specs: {
				frame: 'Carbon fiber',
				frontFork: 'SR Suntour Magnesium alloy, front suspension',
				brake: 'Tektro Hydraulic F+R disc brake,',
				display: '5 lever Color LCD display  APT  860C',
				battery: 'LG 36V 9.6Ah, quick release with USB ',
				motor: 'Bafang rear motor 36V 250W  ',
				gear: 'Shimano 7 speed',
				tire: 'CST 700*45c with reflective',
			},
		},

		{
			name: 'Venlo',
			code: 'C043',
			category: 'city',
			model: './Japan/XPL.gltf',
			background: './images/bg-xplorer.png',
			poster: './images/exp1.png',
			specs: {
				frame: '6061 aluminium alloy',
				frontFork: 'Suspension front fork',
				brake: 'F+R mechanical disc brake',
				display: 'LCD display',
				battery: '36V 10.4Ah ',
				motor: 'Rear motor  36V 250W',
				gear: 'Shimano 7 speed',
				tire: 'CST 700C*38C',
			},
		},

		{
			name: 'Vega',
			code: 'C044',
			category: 'city',
			model: 'https://ar-euro.s3.ap-south-1.amazonaws.com/spain-models/C044/c044.gltf',
			background: './images/bg-xplorer.png',
			poster: './posters/VEGA C044.png',
			specs: {
				frame: '6061 aluminium alloy',
				frontFork: 'Hydraulic Oil Suspension Front Fork with lock',
				brake: 'Tektro F+R hydraulic oil disc brake',
				display: 'LCD display',
				battery: '36V 10.4Ah ',
				motor: 'Middel motor 36V 250W',
				gear: 'Shimano 9 speed',
				tire: 'CST 27.5*2.25 tire',
			},
		},

		{
			name: 'Polaris',
			code: 'C045',
			category: 'city',
			model: 'https://ar-euro.s3.ap-south-1.amazonaws.com/spain-models/C045/C045.gltf',
			background: './images/bg-xplorer.png',
			poster: './images/exp1.png',
			specs: {
				frame: '6061 aluminium alloy',
				frontFork: 'Suspension front fork',
				brake: 'Front+rear Tektro mechanical brake',
				display: 'LCD display',
				battery: 'LG/Samsung  lithium battery 36V 10.4Ah with USB port',
				motor: 'Bafang rear motor  36V 250W',
				gear: 'Shimano 7 speed',
				tire: 'Kenda 27.5*2.1',
			},
		},
		{
			name: 'Castor',
			code: 'C046',
			category: 'city',
			model: './Japan/XPL.gltf',
			background: './images/bg-xplorer.png',
			poster: './images/exp1.png',
			specs: {
				frame: '6061 aluminium alloy',
				frontFork: 'Suspension front fork',
				brake: 'Front + Rear Disc mechanical disc brake ',
				display: 'LCD display',
				battery: '48V 12.5Ah',
				motor: 'Rear motor 48V  250W',
				gear: 'Shimano 7 speed',
				tire: 'CST 26*2.125',
			},
		},

		{
			name: 'Plymouth',
			code: 'C053',
			category: 'city',
			model: 'https://ar-euro.s3.ap-south-1.amazonaws.com/spain-models/C053/C053.gltf',
			background: './images/bg-xplorer.png',
			poster: './posters/DUNE M052.png',
			specs: {
				frame: '6061 aluminium alloy',
				frontFork: 'Alloy Suspension front fork',
				brake: 'Tektro mechanical F+R disc brake',
				display: 'LCD display',
				battery: '36V 10.4Ah ，quick release',
				motor: 'Rear motor 36V 250W',
				gear: 'Shimano 7 speed',
				tire: 'CST 26*2.35',
			},
		},
		{
			name: 'Brooklyn',
			code: 'C054',
			category: 'city',
			model: 'https://ar-euro.s3.ap-south-1.amazonaws.com/spain-models/c054/C054.gltf',
			background: './images/bg-xplorer.png',
			poster: './posters/BROOKLYN C054.png',
			specs: {
				frame: '6061 aluminium alloy',
				frontFork: 'Alloy Suspension front fork',
				brake: 'Tektro mechanical F+R disc brake',
				display: 'LCD display',
				battery: '36V 10.4Ah ，quick release',
				motor: 'Rear motor 36V 250W',
				gear: 'Shimano 7 speed',
				tire: 'CST 26*2.35',
			},
		},
		{
			name: 'Iris',
			code: 'C055',
			category: 'city',
			model: './Japan/XPL.gltf',
			background: './images/bg-xplorer.png',
			poster: './images/exp1.png',
			specs: {
				frame: 'Advanced Carbon race frame',
				frontFork: 'Advanced Carbon race fork',
				brake: 'SHIMANO Hydraulic F+R disc brake',
				display: 'RideControl GO, Frame Integrated LED Display',
				battery: 'Sumsung 36V 10AH',
				motor: 'Vinka Middle motor 36V250W',
				gear: 'Shimano 22 speed',
				tire: 'CST Continental gravel 700*40C',
			},
		},
		{
			name: 'Santorini',
			code: 'C056',
			category: 'city',
			model: 'https://ar-euro.s3.ap-south-1.amazonaws.com/spain-models/c056/C056.gltf',
			background: './images/bg-xplorer.png',
			poster: './posters/SANTORINI M056.png',
			specs: {
				frame: '6061 aluminium alloy',
				frontFork: 'Suspension front fork',
				brake: 'Mechanical F+R disc brake',
				display: 'LCD  display',
				battery: '36V 10.4Ah',
				motor: 'Rear motor  36V 250W',
				gear: 'Shimano 7 speed',
				tire: 'CST 700*38C',
			},
		},
		// Folding Bikes

		{
			name: 'Touche',
			code: 'F024',
			category: 'folding',
			model: 'https://ar-euro.s3.ap-south-1.amazonaws.com/spain-models/F024/f024.gltf',
			background: './images/bg-xplorer.png',
			poster: '../posters/TOUCHE F024.png',
			specs: {
				frame: '6061 aluminium alloy',
				frontFork: 'Suspension front fork',
				brake: 'Tektro F+R disc brake',
				display: 'LED display',
				battery: '48V 10Ah',
				motor: 'Rear motor  48V 250W/500W',
				gear: 'Shimano 7 speed',
				tire: 'CST 20*4.0',
			},
		},

		{
			name: 'Strada',
			code: 'F046',
			category: 'folding',
			model: 'https://ar-euro.s3.ap-south-1.amazonaws.com/spain-models/f046/F046.gltf',
			background: './images/bg-xplorer.png',
			poster: './posters/STRADA F046.png',
			specs: {
				frame: '6061 aluminium alloy',
				frontFork: 'ZOOM Suspention front fork',
				brake: 'Tektro F+R disc brake',
				display: 'LCD display',
				battery: 'LG 36V 9.6 Ah',
				motor: 'Bafang rear motor 36V 250W',
				gear: 'Shimano 7 speed',
				tire: 'Kenda 20*2.35',
			},
		},
		{
			name: 'Rigel',
			code: 'F042',
			category: 'folding',
			model: './Japan/XPL.gltf',
			background: './images/bg-xplorer.png',
			poster: './images/exp1.png',
			specs: {
				frame: 'Meganisium-alloy',
				frontFork: 'Steel front fork',
				brake: 'F+R mechanical disc brake   ',
				display: 'LCD display',
				battery: '36V 7.5Ah',
				motor: 'Rear motor 36V 250W ',
				gear: 'Shimano 6 speed',
				tire: 'CST 16*2.125',
			},
		},
		{
			name: 'Hefei',
			code: 'F031',
			category: 'folding',
			model: 'https://ar-euro.s3.ap-south-1.amazonaws.com/spain-models/F031/F031.gltf',
			background: './images/bg-xplorer.png',
			poster: './posters/hefie f031.png',
			specs: {
				frame: '6061 aluminium alloy',
				frontFork: 'Suspension front fork',
				brake: 'Tektro F+R disc brake',
				display: 'LED display',
				battery: '48V 10Ah',
				motor: 'Rear motor  48V 500W',
				gear: 'Shimano 7 speed',
				tire: 'CST 20*4.0',
			},
		},
		{
			name: 'Doodle',
			code: 'F032',
			category: 'folding',
			model:
				'https://ar-euro.s3.ap-south-1.amazonaws.com/spain-models/doodle/Doodle.gltf',
			background: './images/bg-xplorer.png',
			poster: './posters/DOODLE F032.png',
			specs: {
				frame: '6061 aluminium alloy',
				frontFork: 'Suspension front fork',
				brake: 'F+R disc brake',
				display: 'LCD display',
				battery: '36V 10Ah',
				motor: 'Rear motor  36V 350W',
				gear: 'Shimano 7 speed',
				tire: 'CST 20*4.0',
			},
		},
		{
			name: 'Echo',
			code: 'F043',
			category: 'folding',
			model:'https://ar-euro.s3.ap-south-1.amazonaws.com/spain-models/f043/F043.gltf',
			background: './images/bg-xplorer.png',
			poster: './posters/ECHO F043.png',
			specs: {
				frame: '6061 aluminium alloy',
				frontFork: 'Aluminium alloy front fork',
				brake: 'Tektro Mechanical F+R disc brake',
				display: 'LCD display',
				battery: 'LG 36V 9.6Ah ',
				motor: 'Rear motor  36V 250W',
				gear: 'Shimano 7 speed',
				tire: 'CST 20*1.95',
			},
		},
		{
			name: 'Toledo',
			code: 'F049',
			category: 'folding',
			model: 'https://ar-euro.s3.ap-south-1.amazonaws.com/spain-models/F049/F049.gltf',
			background: './images/bg-xplorer.png',
			poster: './posters/TOLEDO F049.png',
			specs: {
				frame: '6061 aluminium alloy',
				frontFork: 'Suspension front fork',
				brake: 'Tektro hydraulic oil F+R disc brake',
				display: 'LCD display',
				battery: '36V 12.8Ah',
				motor: 'Rear motor  36V 250W',
				gear: 'Shimano 7 speed',
				tire: 'CST 20*4.0',
			},
		},
		{
			name: 'Windsor',
			code: 'F050',
			category: 'folding',
			model: 'https://ar-euro.s3.ap-south-1.amazonaws.com/spain-models/f050/F050.gltf',
			background: './images/bg-xplorer.png',
			poster: './posters/WINDSOR F050.png',
			specs: {
				frame: '6061 aluminium alloy',
				frontFork: 'Suspension front fork',
				brake: 'Tektro F+R disc brake',
				display: 'LED display',
				battery: '48V 10Ah',
				motor: 'Rear motor 48V 500W',
				gear: 'Shimano 7 speed',
				tire: 'CST 20*4.0',
			},
		},

		// Foalding Bikes

		{
			name: 'Lil E',
			code: 'SC-01',
			model: 'https://ar-euro.s3.ap-south-1.amazonaws.com/spain-models/lile/LILE_India.gltf',
			background: './images/bg-xplorer.png',
			poster: './images/exp1.png',
			specs: {
				frame: 'Steel frame',
				groundDistance: '15cm',
				brake: 'Front electronic brake, rear disc brake',
				battery: '36V 7.5Ah',
				motor: '350W Brushless motor',
				gear: 'Shimano 7 speed',
				tire: 'CST 14*2.5',
			},
		},
	]

	useEffect(() => {
		const onProgress = (event) => {
			const progressBar = event.target.querySelector('.load')
			// const updatingBar = event.target.querySelector('.update-bar')
			// updatingBar.style.width = `${event.detail.totalProgress * 100}%`

			const percentage = event.target.querySelector('.percentage')
			percentage.innerHTML = `${parseInt(event.detail.totalProgress * 100)}%`
			console.log(event.detail.totalProgress)
			if (event.detail.totalProgress === 1) {
				progressBar.classList.add('hide')
			} else {
				progressBar.classList.remove('hide')
				if (event.detail.totalProgress === 0) {
					event.target.querySelector('.center-pre-prompt').classList.add('hide')
				}
			}
		}
		document
			.querySelector('model-viewer')
			.addEventListener('progress', onProgress)
	}, [bike])


	const configBike = (i)=>{
		setBike(i)
		setCollapseMobile(!collapseMobile)
	}

	return (
		<div className='container-fluid height-100 p-0 width-100'>
			<div className='d-lg-flex h-100 p-0 '>
				<div
					id='model-screen'
					className={`h-100  position-relative ${
						!collapse ? 'open-model' : 'close-model'
					} `}>
					<img src={logo} className='logo-bs' alt='' />
					<button
						className={`collapse-btn d-none d-lg-block  ${
							collapse && 'rotate'
						}`}
						onClick={() => setCollapse(!collapse)}>
						<i class='fa-solid fa-chevron-left '></i>
					</button>

					{/* ..... */}

					{/* <select
						id='change-bike'
						class='form-select d-lg-none'
						onChange={changeBike}>
						{allBikes.map((b, i) => (
							<option key={i} value={`${i}`}>
								{b.name}
							</option>
						))}
					</select> */}

					<div className={` h-100 main-div  ` } >
						<model-viewer
							id='hotspot-camera-view-demo'
							bounds='tight'
							className=''
							enable-pan
							src={allBikes[bike].model}
							ar
							interaction-prompt='none'
							ar-placement='floor'
							render-scale='1'
							ar-scale='fixed'
							ar-modes='scene-viewer webxr quick-look'
							camera-controls
							camera-orbit='-90deg 80deg   '
							environment-image='neutral'
							shadow-intensity='3'>
							<div className='load position-relative h-100 w-100 d-flex align-items-center justify-content-center' style={{backgroundColor:'#fff'}}>
								<img src={loading} className='  ' style={{width:'25%'}} />
								{/* <p className='text-center mt-3 percentage text-light text-bold'>
										0%
								</p> */}
								{/* <div className='h-100 w-100 bg-dark d-flex align-items-center justify-content-center'>
									<div>
									<div className='cube'>
										<div></div>
										<div></div>
										<div></div>
										<div></div>
										<div></div>
										<div></div>
									</div>
									
									</div>
								
								</div> */}
								
							</div>


							
							
							{/* <div className='p-3 d-none  d-lg-flex w-100  align-items-center justify-content-around specs text-light'>
									<div className=''>
										<p className='mb-0'>Frame</p>
										<h5>{allBikes[bike].specs.frame}</h5>
									</div>
									<div className=''>
										<p className='mb-0'>Battery</p>
										<h5>{allBikes[bike].specs.battery}</h5>
									</div>
									<div className=''>
										<p className='mb-0'>Motor</p>
										<h5>{allBikes[bike].specs.motor}</h5>
									</div>
									<div className=''>
										<p className='mb-0'>Gear</p>
										<h5>{allBikes[bike].specs.gear}</h5>
									</div>								
							</div> */}

							{/* ........ */}

							<button slot='ar-button' id='ar-button'>
								<i class='fa-solid d-block d-lg-none fa-vr-cardboard'></i>
								<span className='d-none d-lg-block'>View in your space</span>
							</button>
							<div id='ar-prompt'></div>
						</model-viewer>


						<button
							className={`collapse-btn-mobile d-lg-none d-block  `}
							onClick={() => setCollapseMobile(!collapseMobile)}>
							<i className={`fa-solid fa-chevron-up  `}></i>
							</button>
						{/* .......... */}
						<div className={` bg-light d-lg-none  ${collapseMobile && 'mobile-list animate__animated animate__fadeInUp'} `} >
							
							<div className='bg-light' style={{top:'0%'}}>

							<div className='position-sticky bg-light  pt-4' style={{top:'0%'}}>
								<div className='d-flex justify-content-between  align-items-center '>
									<h4 className='mb-2'>EM Bikes</h4>
									<button
							className={` d-lg-none d-block  `}
							onClick={() => setCollapseMobile(!collapseMobile)}>
							<i className={`fa-solid fa-chevron-up  `}></i>
							</button>
								</div>
							</div>	

							{allBikes.map((b, i) => (
									<div
										onClick={() => configBike(i)}
										className='bike-card p-2  mt-3 mb-3 d-flex justify-content-evenly  '>
										<div className='pt-4 pb-4'>
											<img src={b.poster} className='img-fluid' alt='' />
										</div>
									</div>
							))}

							</div>
						</div>


					</div>
				</div>
				<div
					id='bike-list'
					className={`h-100 bg-light d-none d-lg-block  ${
						collapse ? 'open-list' : 'close-list'
					}`}>
					<div className='main-list height-100 overflow-auto p-4 pt-0 '>
						<div className='position-sticky bg-light  pt-4' style={{top:'0%'}}>
							<div className='d-flex justify-content-between  align-items-center '>
								<h4 className='mb-2'>EM Bikes</h4>
								<div className='form-floating' style={{ width: '45%' }}>
									<select
										class='form-select'
										id='floatingSelect'
										onChange={(e)=> setCategory(e.target.value)}
										aria-label='Floating label select example'>
										<option value='all'   selected>
											All
										</option>
										<option value='mtb' >Mountain</option>
										<option value='city' >City</option>
										<option value='folding'>Foalding</option>
									</select>
									<label for='floatingSelect'>Category</label>
								</div>
							</div>
						</div>
						
						<div className='d-flex d-lg-block'>
						

							{
									category === 'all' &&  allBikes.map((b,i)=> <div
									onClick={() => setBike(i)}
									className='bike-card bg-danger p-2  mt-3 mb-3 d-flex justify-content-evenly  '>
										<div className='pt-4 pb-4'>
										<h1>{b.name}</h1>
										</div>
									</div>)
							}
							
						{allBikes.map((b, i) => (
								
								
								b.category === category  && <div
									onClick={() => setBike(i)}
									className='bike-card p-2  mt-3 mb-3 d-flex justify-content-evenly  '>
									<div className='pt-4 pb-4'>
									 {
									 <h1>{b.name}</h1>
									 }	
									</div>
									</div>
							
							))} 
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BikeScreen
