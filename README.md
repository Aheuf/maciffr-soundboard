# DOC APP

**app de soundboard partagée.**

Pour avoir votre version :
- demander l'ajout en tant que contributeur au projet
- creer une branche propre à l'équipe
- mettre les miniatures des sons dans `assets/images` et les sons dans `assets/audios`
- renseigner les constantes du fichier `constants.ts` comme suivant :
  - le tableau `sounds` porte les titres des boutons
  - le tableau `audios` porte l'import de l'audio sous format `require("../assets/audios/{{TITRE}}.mp3")` **ATTENTION** le titre est renseigné en dur. *merci react native*
  - le tableau `images` porte l'import des miniatures sous le format `require("../assets/audios/{{TITRE}}.png")` **ATTENTION** le titre est renseigné en dur. *merci react native*
- build votre APK *(necessite un compte expo et un `> eas login` dans la console)* avec la commande `eas build --profile preview --platform android`

c'est une V0.1.0 donc pas encore compatible IOS je ne sais pas si juste changer la commande de build suffit...

# VVV - DOC EXPO - VVV

## Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
