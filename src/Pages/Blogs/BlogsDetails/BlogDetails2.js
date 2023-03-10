import React from 'react';

const BlogDetails2 = () => {
    return (
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <p>
            <span>What is JWT ?</span> <br />
            JSON Web Token (JWT) is an open standard (RFC 7519) for securely
            transmitting information between parties as JSON object. It is
            compact, readable and digitally signed using a private key/ or a
            public key pair by the Identity Provider(IdP) <br />
            <span>How does JWT Work?</span> <br />
            JWTs differ from other web tokens in that they contain a set of
            claims. Claims are used to transmit information between two parties.
            What these claims are depends on the use case at hand. For example,
            a claim may assert who issued the token, how long it is valid for,
            or what permissions the client has been granted. A JWT is a string
            made up of three parts, separated by dots (.), and serialized using
            base64. In the most common serialization format, compact
            serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
            Once decoded, you will get two JSON strings: The header and the
            payload. The signature. The JOSE (JSON Object Signing and
            Encryption) header contains the type of token — JWT in this case —
            and the signing algorithm. The payload contains the claims. This is
            displayed as a JSON string, usually containing no more than a dozen
            fields to keep the JWT compact. This information is typically used
            by the server to verify that the user has permission to perform the
            action they are requesting. There are no mandatory claims for a JWT,
            but overlaying standards may make claims mandatory. For example,
            when using JWT as bearer access token under OAuth2.0, iss, sub, aud,
            and exp must be present. some are more common than others. The
            signature ensures that the token hasn’t been altered. The party that
            creates the JWT signs the header and payload with a secret that is
            known to both the issuer and receiver, or with a private key known
            only to the sender. When the token is used, the receiving party
            verifies that the header and payload match the signature.
          </p>
        </div>
      </div>
    );
};

export default BlogDetails2;