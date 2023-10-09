import avatar from '../../../assets/default-avatar.svg';

function Person({ person }) {
  
  const {name, nickName='No NickName', images='No images'} = person;

  //optional chaining
  const img = images?.[0]?.small?.url || avatar;
  
  // const img = images && images[0] && images[0].small && images[0].small.url;


  
  return (
    <div>
      <h2>{name}</h2>
      <h3>NiceName : {nickName}</h3>
      <img src={img} alt={name} style={{width: '150px'}}/>
    </div>
  );
}

export default Person;
