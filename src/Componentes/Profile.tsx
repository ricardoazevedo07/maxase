import style from '../styles/components/Profile.module.css'

export function Profile(){
    return (
        <div className={style.profileContainer}>
            <img src="https://64.media.tumblr.com/bdb00e51f90e556d05dd4a25160b1381/357398dee800bc06-05/s128x128u_c1/924ff5833361870879f2fd7cca13b17e2a53ac50.jpg" alt="Ricardo Azevedo"/>
            <div>
                <strong>John David Washington</strong>
                <p> <img src="icons/level.svg" alt="" width='20px' height='20px'/> Level 1 </p>
            </div>
        </div>
        
    );
}