import PostModel from "components/PostModel";
import React from "react";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpeg";
import styles from "./About.module.css";

const About = () => {
  return (
    <PostModel fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}> Olá eu sou o Luiz</h3>
      <img src={fotoSobreMim} alt="Luiz" className={styles.fotoSobreMim} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat
        consequat leo id ornare. Praesent convallis tortor est, sit amet
        porttitor lectus dictum non. Aliquam porta tempor orci, non mattis augue
        pharetra sit amet. Maecenas id magna metus. Aliquam erat volutpat. Donec
        vel neque ligula. Quisque et vehicula enim, vel pharetra ligula. Cras
        vitae elit purus. Donec sed ante venenatis, tincidunt elit at, rhoncus
        arcu. Sed sollicitudin, purus sed pretium rutrum, nulla orci tincidunt
        leo, sit amet faucibus felis urna mattis nulla.
      </p>
      <p>
        Maecenas luctus risus ut elit auctor porttitor ac lobortis libero.
        Vestibulum vel purus sit amet sapien volutpat egestas. Ut tincidunt quam
        a sapien cursus sagittis. Nulla faucibus nunc quis mi rutrum vulputate.
        Nam sit amet condimentum libero. Integer et velit augue. Cras pretium
        nisl et dolor convallis, at porttitor nunc laoreet. Sed at orci leo. Sed
        massa tellus, congue vel scelerisque nec, finibus eget neque. Vivamus
        pharetra justo in nibh porta tincidunt. Maecenas pretium sapien non
        nulla sagittis, vel auctor sapien pretium. In ex diam, euismod tincidunt
        viverra ac, condimentum at nisi. Praesent a metus enim. Donec commodo
        dolor sit amet nibh blandit posuere. Nullam id magna sed felis tempus
        interdum.
      </p>
      <p>
        Donec vel libero sed tortor ultricies condimentum. Mauris luctus aliquam
        odio vitae imperdiet. Phasellus gravida interdum libero, pretium
        scelerisque turpis lobortis at. Nam sed gravida magna, in lacinia odio.
        Donec interdum dictum tellus a ultrices. Sed tempor lectus nibh, id
        finibus tortor dictum ac. Suspendisse rhoncus, nulla ut malesuada
        rutrum, nisi nibh varius orci, nec elementum mauris diam quis mauris.
        Fusce luctus tincidunt erat. Nullam blandit risus quis pretium lobortis.
        Praesent at metus accumsan, posuere ligula vel, fringilla tortor. Fusce
        faucibus elit vitae dapibus convallis. Mauris efficitur mi a sem gravida
        iaculis.
      </p>
      <p>
        Pellentesque sit amet condimentum ante. Praesent mattis euismod lacus a
        facilisis. Fusce at leo fringilla, viverra velit et, dignissim arcu. Sed
        tempus vehicula tincidunt. Etiam cursus risus in lobortis fermentum.
        Morbi ut cursus orci, a pharetra magna. Ut hendrerit vestibulum congue.
        Fusce sit amet lectus id ante luctus ultricies. Cras molestie nulla
        justo, vitae hendrerit mauris faucibus a. Nunc dictum ultrices justo,
        vel sodales elit venenatis in. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Aenean placerat
        augue vitae sem rhoncus, sed volutpat justo hendrerit. Nullam imperdiet
        purus vitae porta rutrum. Cras vitae libero in odio lacinia iaculis sed
        at velit. Donec congue facilisis lorem eu venenatis. Sed vitae tincidunt
        lectus, egestas aliquet ex.
      </p>
    </PostModel>
  );
};

export default About;
