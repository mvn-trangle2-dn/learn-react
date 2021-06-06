import logo from './logo.svg';

function Header() {
  return (
		<div class="container">
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    	<header class="page-header d-flex justify-between">
				<a href="/" class="logo">
					<img src={logo} alt="header-logo"/>
				</a>
				<ul class="header-nav d-flex">
					<li><a class="hover-blur active" href="/">Home</a></li>
					<li><a class="hover-blur" href="/">About Us</a></li>
					<li><a class="hover-blur" href="/">Contact Us</a></li>
				</ul>
				<ul class="header-actions d-flex">
					<li><a class="hover-blur" href="/"><i class="fa fa-search"></i></a></li>
					<li><a class="hover-blur" href="/"><i class="fa fa-user"></i></a></li>
					<li><a class="hover-blur" href="/"><i class="fa fa-shopping-cart"></i></a></li>
				</ul>
    	</header>
		</div>
  );
}

export default Header;
