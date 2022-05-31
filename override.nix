{pkgs ? import <nixpkgs> {
    inherit system;
}, system ? builtins.currentSystem}:

let
  nodePackages = import ./default.nix {
    inherit pkgs system;
  };
in
nodePackages // {
    package = nodePackages.package.override {
        postInstall = "sh -c 'echo n | npm run stubs && npm run build'";
    };
}