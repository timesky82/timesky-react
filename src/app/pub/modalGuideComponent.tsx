"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grow from "@mui/material/Grow";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const TransitionSlideUp = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalGuide() {
  const [stateModal_01, setStateModal_01] = React.useState(false);

  const openModal_01 = () => {
    setStateModal_01(true);
  };

  const clModal_01 = () => {
    setStateModal_01(false);
  };
  const [stateModal_02, setStateModal_02] = React.useState(false);

  const openModal_02 = () => {
    setStateModal_02(true);
  };

  const clModal_02 = () => {
    setStateModal_02(false);
  };
  const [stateModal_03, setStateModal_03] = React.useState(false);

  const openModal_03 = () => {
    setStateModal_03(true);
  };

  const clModal_03 = () => {
    setStateModal_03(false);
  };

  return (
    <div>
      <div className="row">
        <Button className="ma10" variant="outlined" onClick={openModal_01}>
          기본 모달
        </Button>
        <Button className="ma10" variant="outlined" onClick={openModal_02}>
          반응형 모달
        </Button>
        <Button className="ma10" variant="outlined" onClick={openModal_03}>
          풀사이즈 모달
        </Button>
      </div>

      <Dialog
        open={stateModal_01}
        keepMounted
        onClose={clModal_01}
        aria-describedby="alert-dialog-slide-description1"
      >
        <DialogTitle>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi error
          magnam ipsa natus iusto, debitis quis dolores corrupti, cum velit
          adipisci vitae, ipsam eos?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
            maxime, consequuntur impedit harum nisi amet autem dolores
            repellendus necessitatibus fugit quibusdam ad doloremque magnam,
            commodi facilis quae! Alias perspiciatis ducimus magnam error a
            dolore deleniti rerum ab eveniet temporibus aut architecto
            asperiores, aliquam odit magni, sint adipisci, consequatur
            doloremque! Similique, impedit deserunt accusamus aspernatur iusto
            ad modi fugiat eveniet animi maxime asperiores, sequi quae, fugit
            quam cumque tempora exercitationem. Reprehenderit, error aliquid
            placeat animi expedita atque quo dignissimos vel cumque non cum
            magni illo in eius saepe. Veniam aut repudiandae, cumque deleniti
            tempora reprehenderit laboriosam atque dolorum impedit suscipit
            necessitatibus, tenetur, inventore earum optio!
          </DialogContentText>
        </DialogContent>

        <DialogActions className="justify-center">
          <Button
            size="large"
            variant="outlined"
            onClick={clModal_01}
            disableElevation
          >
            취소
          </Button>
          <Button
            variant="contained"
            size="large"
            onClick={clModal_01}
            disableElevation
          >
            확인
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={stateModal_02}
        keepMounted
        maxWidth="md"
        fullScreen={useMediaQuery(useTheme().breakpoints.down("md"))}
        TransitionComponent={TransitionSlideUp}
        onClose={clModal_02}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magnam
          accusamus quidem error dolorem provident incidunt esse commodi laborum
          quod ipsam consequuntur, nesciunt minus.
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit in
            consequuntur dolore, at deserunt illum quae fugiat sint quam placeat
            possimus libero voluptas corrupti optio. Dicta, ut necessitatibus.
            Maiores voluptas optio, sint nostrum quam, nisi eum culpa sit, dicta
            quibusdam laborum doloremque expedita unde necessitatibus quis
            facere excepturi fugiat. Nemo, dolor, fugit quos quae dolorem cumque
            voluptatem laboriosam quis veniam, illo odio perferendis commodi
            voluptatibus nisi temporibus error magni? Officiis consequuntur quia
            eos voluptatum, totam nemo nam in enim nulla est autem ex modi
            fugit, iusto unde quaerat aperiam corporis? Aperiam, accusantium est
            eum magni ab modi quis dolorum! Vero repellat enim, architecto quod
            dolorum illo eius ad deserunt facilis odio officia consequuntur
            incidunt, nobis explicabo. Iure nihil quasi inventore commodi
            dolorem laudantium temporibus, rerum recusandae, placeat voluptas
            numquam. Cum cumque iusto alias exercitationem, error tenetur libero
            rerum molestiae officiis iure placeat quas ipsum ullam ea quos
            accusantium, tempore ab velit facere quam. Magnam impedit nihil
            perferendis sequi quidem suscipit repellendus cupiditate, laborum
            laudantium! Quidem distinctio impedit nulla corrupti error? Iure
            neque sequi minus modi ducimus quam perspiciatis sit, tempora
            repellat, ad ipsam corporis saepe. Quos deleniti soluta quibusdam
            incidunt impedit accusamus eaque, alias vitae provident nostrum
            sapiente labore quod reiciendis porro omnis accusantium officiis
            fugiat illo repudiandae possimus? Ab placeat aspernatur voluptates
            cum, labore suscipit. Tempora doloremque amet culpa magnam. Minima
            inventore ipsum, accusantium eligendi voluptatibus maxime doloremque
            qui cum repellendus provident dicta facilis distinctio illo deleniti
            fugit veritatis sed hic facere modi eaque fuga, dolore doloribus
            totam suscipit? Laudantium officia voluptatum consequatur eaque
            quasi dignissimos quaerat eveniet consequuntur. Illo quis odio,
            recusandae nesciunt alias in ex, eius similique architecto debitis
            asperiores adipisci vitae. A nam totam sunt. Aliquam laudantium
            omnis quaerat! Beatae aliquid nisi ad cum veniam alias. Commodi
            illum enim sit eveniet voluptatem similique, expedita culpa ad cum
            modi quod, unde dolor voluptatum laudantium explicabo! Cum laborum
            qui quae quos nisi illo dignissimos sint! Dolor asperiores quaerat
            quibusdam! Vel, fugit! Natus, voluptate ab! Cumque dolore,
            blanditiis modi ad tenetur fugit rem animi nemo, deserunt corrupti
            eum voluptatem pariatur corporis maxime iusto excepturi voluptates,
            quo illo temporibus dignissimos. Unde dolor necessitatibus nisi
            aliquid, ab qui nam magni incidunt nesciunt, quo, aperiam provident
            vel similique perspiciatis saepe cupiditate molestiae id veniam at
            impedit repudiandae. Soluta deserunt dicta porro excepturi
            praesentium, consectetur obcaecati iusto iure eos voluptates veniam
            natus? Itaque, omnis aut! Saepe ea veritatis dolorum assumenda
            soluta amet iusto.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            size="large"
            variant="outlined"
            onClick={clModal_02}
            disableElevation
          >
            취소
          </Button>
          <Button
            variant="contained"
            size="large"
            onClick={clModal_02}
            disableElevation
          >
            확인
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={stateModal_03}
        fullScreen
        TransitionComponent={Grow}
        onClose={clModal_03}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magnam
          accusamus quidem error dolorem provident incidunt esse commodi laborum
          quod ipsam consequuntur, nesciunt minus.
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit in
            consequuntur dolore, at deserunt illum quae fugiat sint quam placeat
            possimus libero voluptas corrupti optio. Dicta, ut necessitatibus.
            Maiores voluptas optio, sint nostrum quam, nisi eum culpa sit, dicta
            quibusdam laborum doloremque expedita unde necessitatibus quis
            facere excepturi fugiat. Nemo, dolor, fugit quos quae dolorem cumque
            voluptatem laboriosam quis veniam, illo odio perferendis commodi
            voluptatibus nisi temporibus error magni? Officiis consequuntur quia
            eos voluptatum, totam nemo nam in enim nulla est autem ex modi
            fugit, iusto unde quaerat aperiam corporis? Aperiam, accusantium est
            eum magni ab modi quis dolorum! Vero repellat enim, architecto quod
            dolorum illo eius ad deserunt facilis odio officia consequuntur
            incidunt, nobis explicabo. Iure nihil quasi inventore commodi
            dolorem laudantium temporibus, rerum recusandae, placeat voluptas
            numquam. Cum cumque iusto alias exercitationem, error tenetur libero
            rerum molestiae officiis iure placeat quas ipsum ullam ea quos
            accusantium, tempore ab velit facere quam. Magnam impedit nihil
            perferendis sequi quidem suscipit repellendus cupiditate, laborum
            laudantium! Quidem distinctio impedit nulla corrupti error? Iure
            neque sequi minus modi ducimus quam perspiciatis sit, tempora
            repellat, ad ipsam corporis saepe. Quos deleniti soluta quibusdam
            incidunt impedit accusamus eaque, alias vitae provident nostrum
            sapiente labore quod reiciendis porro omnis accusantium officiis
            fugiat illo repudiandae possimus? Ab placeat aspernatur voluptates
            cum, labore suscipit. Tempora doloremque amet culpa magnam. Minima
            inventore ipsum, accusantium eligendi voluptatibus maxime doloremque
            qui cum repellendus provident dicta facilis distinctio illo deleniti
            fugit veritatis sed hic facere modi eaque fuga, dolore doloribus
            totam suscipit? Laudantium officia voluptatum consequatur eaque
            quasi dignissimos quaerat eveniet consequuntur. Illo quis odio,
            recusandae nesciunt alias in ex, eius similique architecto debitis
            asperiores adipisci vitae. A nam totam sunt. Aliquam laudantium
            omnis quaerat! Beatae aliquid nisi ad cum veniam alias. Commodi
            illum enim sit eveniet voluptatem similique, expedita culpa ad cum
            modi quod, unde dolor voluptatum laudantium explicabo! Cum laborum
            qui quae quos nisi illo dignissimos sint! Dolor asperiores quaerat
            quibusdam! Vel, fugit! Natus, voluptate ab! Cumque dolore,
            blanditiis modi ad tenetur fugit rem animi nemo, deserunt corrupti
            eum voluptatem pariatur corporis maxime iusto excepturi voluptates,
            quo illo temporibus dignissimos. Unde dolor necessitatibus nisi
            aliquid, ab qui nam magni incidunt nesciunt, quo, aperiam provident
            vel similique perspiciatis saepe cupiditate molestiae id veniam at
            impedit repudiandae. Soluta deserunt dicta porro excepturi
            praesentium, consectetur obcaecati iusto iure eos voluptates veniam
            natus? Itaque, omnis aut! Saepe ea veritatis dolorum assumenda
            soluta amet iusto.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            size="large"
            variant="outlined"
            onClick={clModal_03}
            disableElevation
          >
            취소
          </Button>
          <Button
            variant="contained"
            size="large"
            onClick={clModal_03}
            disableElevation
          >
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
