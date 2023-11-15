function Profile(props) {
    const { name, age } = props // destruring the  props
    return <h1>Naame: Deo {name}  age is {age} sdsd
        {props.children}
    </h1>
}
export default Profile;