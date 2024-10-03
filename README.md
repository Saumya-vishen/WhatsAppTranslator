## Translation Library Research

During the development of the Chrome extension, I explored several translation libraries but ultimately opted for using dummy text due to the complexities and costs associated with real-time translation APIs. The libraries I researched include:

1. **Google Translate API**
   - **Pricing**: Paid, with a limited free tier.
   - **Link**: [Google Cloud Translation](https://cloud.google.com/translate)

2. **LibreTranslate**
   - **Pricing**: Free and open-source.
   - **Link**: [LibreTranslate](https://libretranslate.com/)
   - **Notes**: I attempted to integrate LibreTranslate into the extension, but I encountered several issues:
     - **API Response Errors**: I received errors indicating that the API was not responding correctly to requests.
     - **Rate Limiting**: At times, the API returned a status of 429, indicating too many requests in a given timeframe, which hindered testing and implementation.
     - **Reliability**: Overall, the API seemed to have inconsistent performance, making it challenging to ensure a smooth user experience.

3. **Microsoft Translator Text API**
   - **Pricing**: Paid, with free tier options available.
   - **Link**: [Microsoft Translator](https://azure.microsoft.com/en-us/services/cognitive-services/translator/)
     
Due to the limitations of the APIs and to comply with the project requirements, the extension currently uses dummy text for translations. This choice ensures that the extension remains functional while providing an opportunity for future improvements with a more reliable translation solution.
