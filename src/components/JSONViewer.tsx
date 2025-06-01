
import React from 'react';
import { Card } from '@/components/ui/card';
import JsonSection from './JsonSection';

const JSONViewer: React.FC = () => {
  const brandData = {
    "brand_perception_brief": {
      "brand": "Augment Code",
      "sections": {
        "introduction": {
          "purpose_of_the_brief": "Provide an in-depth review of how Augment Code is perceived by developers to inform strategy around product development, marketing, and community engagement.",
          "scope_of_analysis": "Sourced insights from Google Cloud, SourceForge, LinkedIn, Gartner, and 18 Reddit threads across r/ChatGPTCoding, r/Cursor, r/AgentCoders, r/AugmentCodeAI, and r/RooCode. Topics covered include product performance, pricing, IDE compatibility, user sentiment, and strategic competitor behavior."
        },
        "brand_perception_in_dev_communities": {
          "key_themes_and_sentiments": {
            "summary": "Augment Code is perceived as a highly effective AI assistant for complex, enterprise-level codebases. Developers value its project-context awareness and tight IDE integration. However, concerns persist around high cost, underwhelming agent features, indexing performance issues, and recent exclusion from the Cursor IDE.",
            "sentiment_breakdown": ["positive", "neutral", "negative"],
            "examples_of_tone_and_phrases": [
              "feeds from project context",
              "chat is underwhelming",
              "expensive compared to Copilot",
              "Cursor removed the Augment plugin",
              "used both tools in tandem with no issues",
              "indexing gets stuck at 99%",
              "agent is extremely slow",
              "resource consumption is much higher"
            ]
          },
          "reputation_strengths": {
            "summary": "Augment Code excels at onboarding developers into large codebases, managing multi-file contexts, and integrating with tools like VSCode, JetBrains, Slack, and Neovim. Users highlight its ability to generate code edits aligned with team standards.",
            "examples": [
              "contextual autocompletion",
              "enterprise-grade Claude integration",
              "tooling breadth",
              "multi-file refactor capabilities"
            ]
          },
          "reputation_challenges": {
            "summary": "Ongoing criticisms include Augment Code's pricing, limitations in chat/agent functions, decreased IDE flexibility due to external blocks (e.g., Cursor), indexing performance issues, and inconsistent agent performance.",
            "examples": [
              "agent not competitive with Claude 3.7",
              "3x more expensive than Copilot",
              "blocked from Cursor IDE",
              "limited model transparency",
              "indexing stuck at 99%",
              "agent is extremely slow",
              "resource consumption is much higher"
            ]
          },
          "notable_quotes_or_insights": [
            "Claude Code is worse than Aider for 5x the price.",
            "I used both Cursor and Augment without issues—this was about competition, not tech.",
            "Windsurf.nvim is free and good enough for most workflows.",
            "Indexation speed increased after I disabled the extension, closed VS Code, then enabled the extension again. But it's still stuck at 99%.",
            "At the time this was posted we had an outage in the indexing system. Or rather it was overloaded by a higher than expected surge in signups.",
            "The agent is EXTREMELY SLOW, compared to other services.",
            "For some reason that I really don't know, the consumption of resources on the computer is MUCH higher, this is something I definitely had never experienced with other services.",
            "The 'intelligence' and ability of the model varies day by day."
          ]
        },
        "competitive_edge_vs_main_competitors": {
          "main_competitors": [
            "GitHub Copilot",
            "Cursor",
            "Claude Code",
            "Windsurf.nvim",
            "Anysphere",
            "Amazon Q Developer",
            "RooCode"
          ],
          "competitive_advantages": {
            "summary": "Augment Code's strengths lie in its use of Claude for deep code understanding, IDE flexibility (except Cursor), and its performance in large monorepos. Developers in enterprise environments appreciate its onboarding and code consistency capabilities.",
            "examples": [
              "multi-file and refactor support",
              "project-aware suggestions",
              "secure deployment via cloud"
            ]
          },
          "competitive_disadvantages_or_gaps": {
            "summary": "The tool's perceived high cost, weak agent/chat features compared to Claude standalone, recent platform access challenges (e.g., Cursor filter), indexing performance issues, and inconsistent agent performance create friction in broader adoption.",
            "examples": [
              "pricing vs Copilot or Windsurf",
              "chat agent lacks power",
              "removed from Cursor IDE",
              "indexing delays and getting stuck",
              "agent is extremely slow",
              "resource consumption is much higher"
            ]
          },
          "visual_or_tabular_comparison": "Available on request – can visualize feature parity, pricing, and user sentiment across competitors."
        },
        "opportunities_for_growth_content_ideas": {
          "content_strategy_to_address_perception": {
            "positive_tactics": [
              "Promote strengths like enterprise-grade performance, onboarding speed, and tool versatility.",
              "Feature testimonials from VSCode and Neovim power users."
            ],
            "negative_tactics": [
              "Provide transparency around pricing tiers and feature value.",
              "Launch technical guides on how to customize or control underlying models.",
              "Address indexing performance issues and provide troubleshooting guides.",
              "Enhance agent performance and consistency."
            ]
          },
          "content_formats_that_resonated": [
            "pricing comparison blogs",
            "Reddit AMAs",
            "codebase onboarding tutorials",
            "developer interviews",
            "open-source use case stories"
          ],
          "specific_content_ideas": [
            "Why Cursor Blocked Augment: Our Side of the Story",
            "Deep Dive: Using Augment with Large Repos in VSCode",
            "Cost vs Value: Windsurf, Copilot, Cursor, and Augment Compared",
            "Real Devs, Real Projects: How Teams Use Augment at Scale",
            "How to Get Claude-Like Agent Features Inside Your IDE",
            "Troubleshooting Indexing Issues in Augment Code: Tips and Tricks",
            "Improving Agent Performance: Best Practices for Consistent Results"
          ]
        },
        "recommendations_and_next_steps": {
          "key_actions": [
            "Release a formal statement or post about the Cursor situation.",
            "Offer flexible pricing options or tiered plans for indie developers.",
            "Improve transparency on model usage and agent customization.",
            "Increase visibility through AMA sessions and comparative case studies.",
            "Enhance indexing performance and provide clear guidance for users facing issues.",
            "Address agent performance inconsistencies and optimize resource usage."
          ],
          "content_roadmap": {
            "short_term": [
              "Post AMA addressing Cursor and roadmap clarity",
              "Launch cost comparison landing page",
              "Create tutorial series for VSCode and Neovim use cases",
              "Publish a troubleshooting guide for indexing issues",
              "Develop guidelines for optimizing agent performance"
            ],
            "long_term": [
              "Develop onboarding sandbox",
              "Expand support for open-source contributors",
              "Run community spotlight program for advanced workflows",
              "Implement improvements to agent performance and resource management"
            ]
          }
        },
        "appendices_or_supporting_data": {
          "details": [
            "18 sources including dev forum posts and industry comparisons",
            "Direct quotes, sentiment tracking, and use case context"
          ],
          "links": [
            "https://cloud.google.com/customers/augment",
            "https://sourceforge.net/software/product/Augment-Code/",
            "https://www.linkedin.com/posts/francois-arbour-investor_ive-been-testing-augment-code",
            "https://www.gartner.com/reviews/market/ai-code-assistants/compare/anysphere-vs-augment-code",
            "https://www.reddit.com/r/AgentCoders/comments/1jpkqk0/have_you_tried_augment_code/",
            "https://www.reddit.com/r/AugmentCodeAI/comments/1kso0f9/augment_code_dumb_as_a_brick/",
            "https://www.reddit.com/r/cursor/comments/1jxjhus/has_anyone_used_augment_code_in_vs_code/",
            "https://www.reddit.com/r/ChatGPTCoding/comments/1kmaer2/is_there_any_good_free_alternative_for_augment/",
            "https://www.reddit.com/r/cursor/comments/1kjzzwy/augmentcode_now_costs_more_than_cursor_windsurf/",
            "https://www.reddit.com/r/ChatGPTCoding/comments/1j91qa3/copilot_vs_augment_code/",
            "https://www.reddit.com/r/ChatGPTCoding/comments/1k9oi1g/need_an_alternative_for_a_code_completion_tool/",
            "https://www.reddit.com/r/ChatGPTCoding/comments/1j5ed2f/how_does_augment_code_or_claude_code_compare_to/",
            "https://www.reddit.com/r/ChatGPTCoding/comments/1kxommd/cursor_filters_and_removes_augment_code_extension/",
            "https://www.reddit.com/r/AugmentCodeAI/comments/1katk9d/my_augment_code_extension_taking_hours_to_index/",
            "https://www.reddit.com/r/AugmentCodeAI/comments/1kic66h/how_to_install_augmentcode_on_windsurf_a_quick/",
            "https://www.reddit.com/r/AugmentCodeAI/comments/1kr8vjt/augment_was_such_a_good_ai_agent/",
            "https://www.reddit.com/r/RooCode/comments/1j22t8t/roocode_vs_augment_code_comparing_claude_37/",
            "https://www.reddit.com/r/RooCode/comments/1k2oc3r/roo_vs_augment_code_for_periodic_code_reviews/",
            "https://www.reddit.com/r/AugmentCodeAI/comments/1kvuf5b/first_time_using_augment/"
          ]
        }
      }
    }
  };

  const renderArray = (items: string[], title?: string) => (
    <div className="mb-4">
      {title && <h4 className="font-medium text-gray-700 mb-2">{title}</h4>}
      <ul className="space-y-1">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
            <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const renderQuotes = (quotes: string[]) => (
    <div className="space-y-3">
      {quotes.map((quote, index) => (
        <blockquote key={index} className="border-l-4 border-blue-300 pl-4 py-2 bg-gray-50 rounded-r">
          <p className="text-gray-700 italic text-sm">"{quote}"</p>
        </blockquote>
      ))}
    </div>
  );

  const renderLinks = (links: string[]) => (
    <div className="space-y-2">
      {links.map((link, index) => (
        <div key={index} className="break-all">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline text-sm"
          >
            {link}
          </a>
        </div>
      ))}
    </div>
  );

  const sections = brandData.brand_perception_brief.sections;

  return (
    <Card className="max-w-4xl mx-auto p-8 bg-white shadow-lg">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Brand Perception Brief</h1>
        <p className="text-xl text-blue-600 font-medium">{brandData.brand_perception_brief.brand}</p>
      </div>

      <JsonSection title="Introduction" level={1}>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Purpose of the Brief</h3>
            <p className="text-gray-600 leading-relaxed">{sections.introduction.purpose_of_the_brief}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Scope of Analysis</h3>
            <p className="text-gray-600 leading-relaxed">{sections.introduction.scope_of_analysis}</p>
          </div>
        </div>
      </JsonSection>

      <JsonSection title="Brand Perception in Dev Communities" level={1}>
        <JsonSection title="Key Themes and Sentiments" level={2}>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Summary</h4>
              <p className="text-gray-600 leading-relaxed">{sections.brand_perception_in_dev_communities.key_themes_and_sentiments.summary}</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Sentiment Breakdown</h4>
              <div className="flex gap-2">
                {sections.brand_perception_in_dev_communities.key_themes_and_sentiments.sentiment_breakdown.map((sentiment, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {sentiment}
                  </span>
                ))}
              </div>
            </div>
            {renderArray(sections.brand_perception_in_dev_communities.key_themes_and_sentiments.examples_of_tone_and_phrases, "Examples of Tone and Phrases")}
          </div>
        </JsonSection>

        <JsonSection title="Reputation Strengths" level={2}>
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">{sections.brand_perception_in_dev_communities.reputation_strengths.summary}</p>
            {renderArray(sections.brand_perception_in_dev_communities.reputation_strengths.examples, "Examples")}
          </div>
        </JsonSection>

        <JsonSection title="Reputation Challenges" level={2}>
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">{sections.brand_perception_in_dev_communities.reputation_challenges.summary}</p>
            {renderArray(sections.brand_perception_in_dev_communities.reputation_challenges.examples, "Examples")}
          </div>
        </JsonSection>

        <JsonSection title="Notable Quotes or Insights" level={2}>
          {renderQuotes(sections.brand_perception_in_dev_communities.notable_quotes_or_insights)}
        </JsonSection>
      </JsonSection>

      <JsonSection title="Competitive Edge vs Main Competitors" level={1}>
        <div className="space-y-6">
          {renderArray(sections.competitive_edge_vs_main_competitors.main_competitors, "Main Competitors")}
          
          <JsonSection title="Competitive Advantages" level={2}>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">{sections.competitive_edge_vs_main_competitors.competitive_advantages.summary}</p>
              {renderArray(sections.competitive_edge_vs_main_competitors.competitive_advantages.examples, "Examples")}
            </div>
          </JsonSection>

          <JsonSection title="Competitive Disadvantages or Gaps" level={2}>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">{sections.competitive_edge_vs_main_competitors.competitive_disadvantages_or_gaps.summary}</p>
              {renderArray(sections.competitive_edge_vs_main_competitors.competitive_disadvantages_or_gaps.examples, "Examples")}
            </div>
          </JsonSection>

          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Visual or Tabular Comparison</h3>
            <p className="text-gray-600 leading-relaxed">{sections.competitive_edge_vs_main_competitors.visual_or_tabular_comparison}</p>
          </div>
        </div>
      </JsonSection>

      <JsonSection title="Opportunities for Growth & Content Ideas" level={1}>
        <JsonSection title="Content Strategy to Address Perception" level={2}>
          <div className="space-y-4">
            {renderArray(sections.opportunities_for_growth_content_ideas.content_strategy_to_address_perception.positive_tactics, "Positive Tactics")}
            {renderArray(sections.opportunities_for_growth_content_ideas.content_strategy_to_address_perception.negative_tactics, "Negative Tactics")}
          </div>
        </JsonSection>

        {renderArray(sections.opportunities_for_growth_content_ideas.content_formats_that_resonated, "Content Formats That Resonated")}
        {renderArray(sections.opportunities_for_growth_content_ideas.specific_content_ideas, "Specific Content Ideas")}
      </JsonSection>

      <JsonSection title="Recommendations and Next Steps" level={1}>
        <div className="space-y-6">
          {renderArray(sections.recommendations_and_next_steps.key_actions, "Key Actions")}
          
          <JsonSection title="Content Roadmap" level={2}>
            <div className="space-y-4">
              {renderArray(sections.recommendations_and_next_steps.content_roadmap.short_term, "Short Term")}
              {renderArray(sections.recommendations_and_next_steps.content_roadmap.long_term, "Long Term")}
            </div>
          </JsonSection>
        </div>
      </JsonSection>

      <JsonSection title="Appendices or Supporting Data" level={1}>
        <div className="space-y-6">
          {renderArray(sections.appendices_or_supporting_data.details, "Details")}
          
          <div>
            <h3 className="font-semibold text-gray-700 mb-3">Source Links</h3>
            {renderLinks(sections.appendices_or_supporting_data.links)}
          </div>
        </div>
      </JsonSection>
    </Card>
  );
};

export default JSONViewer;
