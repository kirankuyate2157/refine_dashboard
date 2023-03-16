import React from "react";

import { useEffect, useRef } from "react";
import { useLogin } from "@pankod/refine-core";
import { Container, Box } from "@pankod/refine-mui";
import { yariga } from "../assets";
import { CredentialResponse } from "../interfaces/google";

const Login: React.FC = () => {
  const { mutate: login } = useLogin<CredentialResponse>();

  const GoogleButton = (): JSX.Element => {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (typeof window === "undefined" || !window.google || !divRef.current) {
        console.log("it`s not working !!");

        return;
      }

      try {
        window.google.accounts.id.initialize({
          ux_mode: "popup",
          client_id:
            "24752329764-utkr72ee1f59ieci281k3eo41thgdgsg.apps.googleusercontent.com",
          callback: async (res: CredentialResponse) => {
            if (res.credential) {
              console.log(" result : ");
              login(res);
            }
          },
        });
        window.google.accounts.id.renderButton(divRef.current, {
          theme: "filled_blue",
          size: "medium",
          type: "standard",
        });
      } catch (error) {
        console.log(error);
      }
    }, []); // you can also add your client id as dependency here

    return <div ref={divRef} />;
  };
  // check if google object is available
  // console.log(divRef.current); // check if the div element is available

  return (
    <Box component="div" sx={{ backgroundColor: "#FCFCFC" }}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <img src={yariga} alt="Yariga Logo" />
          </div>
          <Box mt={4}>
            <GoogleButton />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default Login;
