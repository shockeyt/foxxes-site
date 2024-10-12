const NavMobile = (props) => {
  return (
    <button onClick={() => props.handleDrawer()} className="nav-mobile d-lg-none">
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}

export default NavMobile