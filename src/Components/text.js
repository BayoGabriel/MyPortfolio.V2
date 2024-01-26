 .form_wrapper{
	width: 100%;
}
.form_wrapper ul{
	display: flex;
	flex-wrap: wrap;
	margin-left: -10px;
}
 .form_wrapper ul li{
	width: 50%;
	padding-left: 10px;
	margin-bottom: 10px;
}
 .form_wrapper ul li input,
 .form_wrapper ul li select{
	width: 100%;
	height: 50px;
	padding: 5px 20px;
	background-color: #eaeaea;
	font-family: var(--font-syne);
	font-size: 16px;
	color: #868a9b;
}
 .form_wrapper ul li input:focus,
 .form_wrapper ul li select:focus,
 .form_wrapper textarea:focus,
 .enter_code input:focus{
	outline: none;
}
 .form_wrapper textarea{
	padding: 20px;
	height: 120px;
	background-color: #eaeaea;
	resize: none;
	font-family: var(--font-syne);
	font-size: 16px;
}
 #enter_code{
	width: 100%;
	display: flex;
	align-items: center;
	margin-bottom: 30px;
	margin-top: 2px;
}
 #enter_code span{
	display: inline-block;
	height: 50px;
	line-height: 50px;
	color: #fff;
	background-color: #000;
	padding: 0px 30px;
}
 #enter_code input{
	display: inline-block;
	height: 50px;
	line-height: 50px;
	background-color: #eaeaea;
	padding: 0px 20px;
	font-family: var(--font-syne);
	font-size: 16px;
}
 input::-webkit-outer-spin-button,
 input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

/* Firefox */
 input[type=number] {
  -moz-appearance: textfield;
}

.error_box{
	width: 100%;
	background-color: #fce3e3;
	padding: 20px 10px;
	text-align: center;
	margin-bottom: 10px;
	display: none;
}
.error_box p{
	color: #721c24;
}
.success_box{
	width: 100%;
	display: none;
	background-color: #0ac083;
	padding: 20px 10px;
	text-align: center;
	margin-bottom: 10px;
}
.success_box p{
	color: #fff;
}
.error .cf-form-control {
	border-bottom: 2px solid red;
}
.error select {
	border-bottom: 2px solid red;
}
.success .cf-form-control {
	border-bottom: 2px solid green;
}
.success select {
	border-bottom: 2px solid green;
}
#text-area-w {
	width: 100%;
}

