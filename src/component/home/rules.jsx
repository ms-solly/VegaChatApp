const rules = [
    {
      id: 1,
      title: "Respect and Kindness",
      description: "Treat all members with respect and kindness. We encourage open-mindedness, empathy, and constructive communication at all times."
    },
    {
      id: 2,
      title: "No Hate Speech or Discrimination",
      description: "Hate speech, discrimination, harassment, or bullying of any kind will not be tolerated. We strive to create an inclusive and welcoming space for everyone, regardless of race, ethnicity, gender, sexual orientation, religion, or beliefs."
    },
    {
      id: 3,
      title: "Positive Engagement",
      description: "Keep interactions positive and uplifting. Avoid spreading negativity, gossip, or misinformation. Instead, focus on building each other up and celebrating our shared values."
    },
    {
      id: 4,
      title: "Authenticity and Transparency",
      description: "Be honest and authentic in your interactions. Represent yourself truthfully and transparently, and refrain from impersonating others or engaging in deceptive behavior."
    },
    {
      id: 5,
      title: "Privacy and Confidentiality",
      description: "Respect the privacy and confidentiality of fellow members. Do not share personal information or private conversations without consent. Report any instances of privacy violation immediately."
    },
    {
      id: 6,
      title: "Community Guidelines Compliance",
      description: "Familiarize yourself with and adhere to our community guidelines. These guidelines outline the expectations for behavior and content on our platform and help maintain a safe and enjoyable environment for all."
    },
    {
      id: 7,
      title: "Content Standards",
      description: "Ensure that any content you share, including posts, comments, images, or links, is appropriate and in line with our community standards. Avoid posting offensive, explicit, or inappropriate content."
    },
    {
      id: 8,
      title: "No Spam or Self-Promotion",
      description: "Refrain from spamming, excessive self-promotion, or solicitation. We encourage genuine engagement and contribution to the community rather than purely promotional activities."
    },
    {
      id: 9,
      title: "Respect Intellectual Property",
      description: "Respect the intellectual property rights of others. Do not share copyrighted material without proper authorization or claim credit for work that is not your own."
    },
    {
      id: 10,
      title: "Reporting and Moderation",
      description: "If you encounter any violations of these rules or witness behavior that concerns you, report it to our moderation team immediately. We are committed to addressing issues promptly and ensuring a safe and positive experience for all members."
    }
  ];
  
  const Rules = () => {
    return (
        <>
 <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Community Guidelines</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rules.map(rule => (
          <div key={rule.id} className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <span className="text-4xl">{rule.id}</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">{rule.title}</h3>
              <p className="text-gray-600">{rule.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
</>
    );
  };
  
  export default Rules;
  