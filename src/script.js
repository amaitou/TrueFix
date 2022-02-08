
let header = document.querySelector('.header'),
	menu = document.querySelector('.menu-bar .bar')
	navbar = document.querySelector('.righted-header')
	item = document.querySelectorAll('.righted-header .righted-navbar .nav-item')
	isopen = false


function check_scroll()
{
	if(window.scrollY >= 160)
	{
		header.classList.add('nav-bar-scroll', 'shadow')
		menu.classList.add('navbar-color')
	}
	else
	{
		header.classList.remove('nav-bar-scroll', 'shadow')
		menu.classList.remove('navbar-color')
	}
}

window.addEventListener('scroll', _ =>
{
	check_scroll()
})

document.addEventListener('DOMContentLoaded', _ =>
{
	check_scroll() ;
})

menu.addEventListener('click', _ =>
{
	if(!isopen)
	{
		menu.classList.add('open')
		navbar.classList.add('righted')
		isopen = true
	}
	else
	{
		menu.classList.remove('open')
		navbar.classList.remove('righted')
		isopen = false
	}
})

item.forEach((i) =>
{
	i.addEventListener('click', _ =>
	{
		menu.classList.remove('open')
		navbar.classList.remove('righted')
		isopen = false
	})
})